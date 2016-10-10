function Captcha(Pattern, Operator, LeftOperator, RightOperator){
    this.generate() = function(){

    }
}
describe('Captcha App', () => {
    describe('Pattern 1', () => {
        let pattern = 1;
        it('should return "1 + One" when input is 1,1,1,1', () => {
            let app = new Captcha(pattern,1,1,1 )
            expect(app.generate()).toEqual('1 + One')
        })
        it('should return "2 + Two" when input is 1,1,2,2', () => {
            let app = new Captcha(pattern,1,2,2 )
            expect(app.generate()).toEqual('2 + Two')
        })
    })
    describe('Pattern 2', () => {
        let pattern = 2;
        if('should return "Five - 5" when input is 2,2,5,5', () => {
            let app = new Captcha(pattern,2,5,5,)
            expect(aap.generate()).toEqual('Five - 5')
        })
        if('should return "Nine - 9" when input is 2,2,9,9', () => {
            let app = new Captcha(pattern,2,9,9,)
            expect(aap.generate()).toEqual('Nine - 9')
        })
        if('should return "Nine + 9" when input is 2,1,9,9', () => {
            let app = new Captcha(pattern,1,9,9,)
            expect(aap.generate()).toEqual('Nine - 9')
        })
    })
})
function app(Pattern, Operator, LeftOperator, RightOperator) {
  new Captcha(Pattern, Operator, LeftOperator, RightOperator)
}
