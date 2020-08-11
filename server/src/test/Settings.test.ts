import {
    DEFAULT_DOC_FORMAT_SETTINGS,
    IDocumentFormatSettings,
    setDocumentFormatDefaultValues,
} from '../settings/Settings';

describe('Settings Tests', () => {
    it('should use default format settings when there are no document format settings', (done) => {
        expect(setDocumentFormatDefaultValues(null)).toEqual(DEFAULT_DOC_FORMAT_SETTINGS);
        const emptyDocFormat: IDocumentFormatSettings = {
            enableDocumentFormat: undefined,
            semicolonWhenPossible: undefined,
            spaceBetweenKeywordAndParenthesis: undefined,
        };
        expect(setDocumentFormatDefaultValues(emptyDocFormat)).toEqual(DEFAULT_DOC_FORMAT_SETTINGS);
        done();
    });
});
