let path = require('path');
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`http://www.africau.edu/images/default/sample.pdf`);
        await browser.savePDF(path.resolve(__dirname, '../../downloads/test.pdf'));
    });
});

