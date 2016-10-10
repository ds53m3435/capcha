describe('Captcha App', () => {
    describe('Pattern 1', () => {
        ley pattern = 1;
        it('should return "1+two" when input is 1,1,1,1', () => {
            let app = new Captcha(pattern,1,1,1 )
            expect(app.generate()).toEqual('1 + One')
        })
    })
})