import { CodeLens, CodeLensParams, Position, Range, TextDocumentIdentifier } from 'vscode-languageserver';

import { YmlDefinitionProvider } from '../definitions';
import { codeLensRequestHandler } from '../features';
import { createFakeFunctionContainer, FAKE_FILE_PATH, parseAndVisitYmlFunction } from './TestHelpers';

const DEFAULT_REQUEST_PARAMS: CodeLensParams = {
    textDocument: TextDocumentIdentifier.create(FAKE_FILE_PATH),
};

describe('CodeLensRequestHandler', () => {
    test.each([
        [
            `
coll = new(List);
foreach(_elem, args1) { // +1
    if(_elem.instanceOf(Collection) == true) { // +2 (nesting = 1)
        foreach(_subElem, _elem) { // +3 (nesting = 2)
            if(_subElem.isInstanceOf(Text) == true) { // +4 (nesting = 3)
                coll.add(_subElem);
                break; // +1
            }
        }
    } else if(_elem.isInstanceOf(Text) == true) { // +1
        coll.add(_elem);
    } else { // +1
        logWarning("Why am I here?");
    }
} // Cognitive complexity = 13
`,
            13,
        ],
        [
            `
if(a == true // +1 because of if
    && b == true && c == true // +1
    || d == true || e == true // +1
    && f == true // +1
    || g == true // +1
    && h == true && i == true) { // +1
    for(var, 1, coll.size()) { // +2 (nesting = 1)
        // do nothing
    }
}

if(a == true // +1 because of if
    || b == true || c == true // +1
    && d == true && e == true // +1
) {
    // do nothing
}
`,
            11,
        ],
        [
            `
forall(?country in Country, ?country.continent == EUROPE) { // +1
    if(?country.population > 10000000 // +2 (nesting = 1)
        || ?country.population < 1000) { // +1
        ?country.writeName();
    }
}
            `,
            4,
        ],
        [
            `
value = ifExpr(a > 0) // +1
        then "great"
        else ifExpr(a < 0) // +2 (nesting = 1)
            then "bad"
            else "same";
            `,
            3,
        ],
        [
            `
value = switchExpr(value) {// +1
        case GREAT: "great"
        case BAD: "bad"
        default: "same"
};
            `,
            1,
        ],
        [
            `
switch(value) {// +1
    case GREAT: {
        value = "great";
    }
    case BAD: {
        value = "bad";
    }
    default: {
        value = "same";
    }
}
            `,
            1,
        ],
        [
            `
// Ugly code that should never exist.
a = 0;
while(a > 0 // +1
    && a < 10) { // +1
    if(a > 5 // +2 (increment = 1)
        && a < 8) { // +1
        logInfo(a);
    } else { // +1
        logInfo(a - 1);
        while(true == true) { // +3 (increment = 2)
            if(condition == true) { // +4 (increment = 3)
                break; // +1
            } else {
                if(otherCondition == true) { // +5 (increment = 4)
                    break; // +1
                }
            }
        }
    }
    incr(a);
}`,
            21,
        ],
    ])('the function %# should give the expected codeLens', (functionContent, expectedComplexity) => {
        const definitionProvider = new YmlDefinitionProvider();
        parseAndVisitYmlFunction(createFakeFunctionContainer(functionContent), null, definitionProvider);
        const handler = codeLensRequestHandler(definitionProvider);
        const codeLens: CodeLens[] = handler(DEFAULT_REQUEST_PARAMS);
        const contentNumberOfLines = functionContent.split('\n').length;
        expect(codeLens).toBeTruthy();
        expect(codeLens.length).toBe(1);
        expect(codeLens[0]).toStrictEqual({
            range: Range.create(Position.create(0, 0), Position.create(contentNumberOfLines + 4, 1)),
            command: {
                title: `${expectedComplexity <= 20 ? '$(heart) ' : ''} Cognitive complexity is ${expectedComplexity}.`,
                command: null,
            },
        });
    });
});
