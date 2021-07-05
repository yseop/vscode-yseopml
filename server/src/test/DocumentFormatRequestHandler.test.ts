import { buildDocumentEditList } from '../features';
import { DEFAULT_DOC_FORMAT_SETTINGS, IDocumentFormatSettings } from '../settings/Settings';
import { createFakeDocument, createFakeFunctionContainer } from './TestHelpers';

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
    a = random();
    b = random();
    /* Three space additions → “if(input.isInstanceOf(Country) != true) {” */
    if(input.isInstanceOf(Country)!=true){
        country = input;
    }

    /* One space removal + two space additions → “if(input.isInstanceOf(Number) == true) {” */
    if (input.isInstanceOf(Number) ==true){
        country = dummyCountry.getCountry(input);
    }
    /* One space removal + wo space additions → “if(input.isInstanceOf(Text) == false) {” */
    if (input.isInstanceOf(Text)== false){
        country = dummyCountry.findCountryByCode(input);
        /* Five space replacements → “}else if(a == b || a > b) {” */
    }else if(a  ==        b    ||a     >   b) {
        /* One space replacement + three space additions → “x = ifExpr(a > b)” */
        x    =ifExpr(a>b)
        then a
        else b;
        logInfo(x);
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
    /* Two space additions → “hashMap[country] = x;” */
    hashMap[country]=x;
    assert(a == b);
    return country;
};
`,
        );
        expect(buildDocumentEditList(file, DEFAULT_DOC_FORMAT_SETTINGS)).toHaveLength(25);
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
    me.friend:= you;
    world.execute(me);
    try (
        do {
            timeCounter(myCounter, {
                world.search(you);
                if(world.find(you) == true&&   you.greet(me) == true) {
                    me.talk(you);
                }
            });
        }
        catch(_EXTERNAL_ALERT) {
            lowWarning("Something wrong happened with you.");
        }
    );
};
`);
        expect(buildDocumentEditList(file, DEFAULT_DOC_FORMAT_SETTINGS)).toHaveLength(3);
        expect(buildDocumentEditList(file, null)).toHaveLength(3);
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
    input = 12;
}`,
            4,
        ],
        [
            `
// No change between open parenthesis and “input”.
if       ( input   !=null) myFunction();`,
            3,
        ],
        [
            `
if  (input == true)     {

}   else   if     (inputB == false)    {

}else{
    // do nothing
}
`,
            8,
        ],
    ])('the selected text (%#) should give the expected number of edits', (content, expectedEdits) => {
        const file = createFakeDocument(createFakeFunctionContainer(content));
        expect(buildDocumentEditList(file, DEFAULT_DOC_FORMAT_SETTINGS)).toHaveLength(expectedEdits);
        expect(buildDocumentEditList(file, null)).toHaveLength(expectedEdits);
    });
});
