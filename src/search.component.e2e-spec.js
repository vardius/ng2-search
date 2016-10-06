describe('SearchComponent', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should have input', () => {
        expect(element(by.css('input.search-box')).isPresent()).toEqual(true);
    });
});
