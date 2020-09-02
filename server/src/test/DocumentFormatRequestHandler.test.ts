import { TextDocument } from 'vscode-languageserver';

import { buildDocumentEditList } from '../server';
import { DEFAULT_DOC_FORMAT_SETTINGS, IDocumentFormatSettings } from '../settings/Settings';

const FAKE_FILE_PATH = '/file1.kao';
const YML_LANGUAGE_ID = 'yml';

function createFakeFunctionContainer(functionContent: string = ''): string {
    return `function myFunction(Object input)
--> domains Integer
--> action {
    ${functionContent}
};`;
}

/**
 * Create and return a TextDocument with `docContent` as content.
 *
 * @param docContent the document content
 *
 * @return a TextDocument
 */
function createFakeDocument(docContent: string): TextDocument {
    return TextDocument.create(FAKE_FILE_PATH, YML_LANGUAGE_ID, 1, docContent);
}

describe('DocumentFormatRequestHandler', () => {
    it('should not give edits when there is nothing to do', (done) => {
        const file = createFakeDocument(
            `Person personA
            --> lastName "LastName"
            --> firstName "FirstName"
            ;`,
        );
        // No edit required.
        expect(buildDocumentEditList(file, DEFAULT_DOC_FORMAT_SETTINGS)).toHaveLength(0);
        done();
    });
    it('should give edits when there are edits to do', (done) => {
        const file = createFakeDocument(
            `
function myFunction(Object input)
--> domains Object
--> local Country country, Number a, Number b, Number x
--> action {
    /* Semicolon addition → “a = random();” */
    a = random()
    /* Semicolon addition → “b = random();” */
    b = random()
    /* Three space additions → “if(input.isInstanceOf(Country) != true) {” */
    if(input.isInstanceOf(Country)!=true){
        country = input;
    }

    /* One space removal + two space additions → “if(input.isInstanceOf(Number) == true) {” */
    if (input.isInstanceOf(Number) ==true){
        /* Semicolon addition → “country = dummyCountry.getCountry(input);” */
        country = dummyCountry.getCountry(input)
    }
    /* One space removal + wo space additions → “if(input.isInstanceOf(Text) == false) {” */
    if (input.isInstanceOf(Text)== false){
        /* Semicolon addition → “country = dummyCountry.findCountryByCode(input);” */
        country = dummyCountry.findCountryByCode(input)
        /* Five space replacements → “}else if(a == b || a > b) {” */
    }else if(a  ==        b    ||a     >   b) {
        /* One space replacement + three space additions → “x = ifExpr(a > b)” */
        x    =ifExpr(a>b)
        then a
        /* Semicolon addition → “else b;” */
        else b
        /* Semicolon addition → “logInfo(x);” */
        logInfo(x)
    /* One space replacement then two spaces replacements. */
    /* “if(a <   b
    ||  b    > x)”

    → “if(a < b
    || b > x)”
        */
    } else if(a <   b
    ||  b    > x) {
        hashMap[country] = a;
    }
    /* Two space additions + semicolon addition → “hashMap[country] = x;” */
    hashMap[country]=x
    /* Semicolon addition → “assert(a == b);” */
    assert(a == b)
    /* Semicolon addition → “return country;” */
    return country
};
`,
        );
        expect(buildDocumentEditList(file, DEFAULT_DOC_FORMAT_SETTINGS)).toHaveLength(33);
        done();
    });
    it('should not give edits when the file has syntax errors', (done) => {
        const file = createFakeDocument(
            createFakeFunctionContainer(
                `// Wrong operator
            if       ( input   =null)     {
                // comment
            }`,
            ),
        );
        // No edit required because of the syntax error.
        expect(buildDocumentEditList(file, DEFAULT_DOC_FORMAT_SETTINGS)).toHaveLength(0);
        done();
    });
    it('should not give edits when the settings disable document format feature', (done) => {
        const file = createFakeDocument(
            createFakeFunctionContainer(`if       ( input   !=null)     {
    logInfo("Input isn't null")
}
return input;`),
        );
        const settings: IDocumentFormatSettings = {
            enableDocumentFormat: 'no',
            semicolonWhenPossible: 'yes',
            spaceBetweenKeywordAndParenthesis: 'no',
        };
        expect(buildDocumentEditList(file, settings)).toHaveLength(0);
        done();
    });
    it('should give edits when there try/catch, time counters, multivalued assignment and && operator', (done) => {
        const file = createFakeDocument(`
function myFunction(World world, Person me)
--> local Person you
--> domains Void
--> action {
    you = new(Person, firstName, "Peter", lastName, "Pan");
    me.friend:= you
    world.execute(me);
    try (
        do {
            timeCounter(myCounter, {
                world.search(you)
                if(world.find(you) == true&&   you.greet(me) == true) {
                    me.talk(you)
                }
            })
        }
        catch(_EXTERNAL_ALERT) {
            lowWarning("Something wrong happened with you.")
        }
    )
};
`);
        expect(buildDocumentEditList(file, DEFAULT_DOC_FORMAT_SETTINGS)).toHaveLength(9);
        done();
    });
    test.each([
        [
            `
// No change between open parenthesis and “input”.
if       ( input   !=null)     {
    // comment
}`,
            4,
        ],
        [
            `
// No change between open parenthesis and “input”.
if       ( input   !=null)     {
    input = 12
}`,
            5,
        ],
        [
            `
// No change between open parenthesis and “input”.
if       ( input   !=null) myFunction()`,
            3,
        ],
    ])('the selected text (%#) should give the expected number of edits', (content, expectedEdits) => {
        const file = createFakeDocument(createFakeFunctionContainer(content));
        expect(buildDocumentEditList(file, DEFAULT_DOC_FORMAT_SETTINGS)).toHaveLength(expectedEdits);
    });
});
