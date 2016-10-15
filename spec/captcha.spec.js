let letter = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
let operator = ['+', '-', '*', '/'];
function Captcha(Pattern, Operator, LeftOperator, RightOperator) {
    this.generate = function() {
        return new leftOperator(Pattern, LeftOperator) + ' ' + new OP(Operator) + ' ' + new rightOperator(Pattern, RightOperator);
    }}
function OP(O) {
    this.toString = function(){
        return operator[O - 1];
    }}
function rightOperator(P, R) {
    this.toString = function() {
        if (P === 1) return letter[R];
         else if (P === 2)  return R;
     }}
function leftOperator(P, L) {
    this.toString = function() {
        if (P === 1) return L;
        else if (P === 2) return letter[L];
        }}
describe('Captcha App', () => {
    describe('Pattern 1', () => {
        let pattern = 1;
        it('should return "1 + One" when input is 1,1,1,1', () => {
            expect(CreateApp(pattern,1,1,1).generate()).toEqual('1 + One')
        })
        it('should return "8 * Eight" when input is 1,3,8,8', () => {
            expect(CreateApp(pattern,3,8,8).generate()).toEqual('8 * Eight')
        })
        it('should return "4 * Four" when input is 1,3,4,4', () => {
            expect(CreateApp(pattern,3,4,4).generate()).toEqual('4 * Four')
        })
        it('should return "1 * One" when input is 1,3,1,1', () => {
            expect(CreateApp(pattern,3,1,1).generate()).toEqual('1 * One')
        })
        it('should return "7 - Seven" when input is 1,2,7,7', () => {
            expect(CreateApp(pattern,2,7,7).generate()).toEqual('7 - Seven')
        })
        it('should return "5 - Five" when input is 1,2,5,5', () => {
            expect(CreateApp(pattern,2,5,5).generate()).toEqual('5 - Five')
        })
        it('should return "3 + Three" when input is 1,1,3,3', () => {
            expect(CreateApp(pattern,1,3,3).generate()).toEqual('3 + Three')
        })
        it('should return "6 - Six" when input is 1,2,6,6', () => {
            expect(CreateApp(pattern,2,6,6).generate()).toEqual('6 - Six')
        })
        it('should return "9 / Three" when input is 1,4,9,3', () => {
            expect(CreateApp(pattern,4,9,3).generate()).toEqual('9 / Three')
        })
    })
    describe('Pattern 2', () => {
        let pattern = 2;
        it('should return "Nine + 9" when input is 2,1,9,9', () => {
            expect(CreateApp(pattern,1,9,9).generate()).toEqual('Nine + 9')
        })
        it('should return "Nine - 9" when input is 2,2,9,9', () => {
            expect(CreateApp(pattern,2,9,9).generate()).toEqual('Nine - 9')
        })
        it('should return "Five - 5" when input is 2,2,5,5', () => {
            expect(CreateApp(pattern,2,5,5).generate()).toEqual('Five - 5')
        })
        it('should return "Eight * 4" when input is 2,3,8,4', () => {
            expect(CreateApp(pattern,3,8,4).generate()).toEqual('Eight * 4')
        })
        it('should return "Eight / 8" when input is 2,4,8,8', () => {
            expect(CreateApp(pattern,4,8,8).generate()).toEqual('Eight / 8')
        })
        it('should return "Four / 4" when input is 2,4,4,4', () => {
            expect(CreateApp(pattern,4,4,4).generate()).toEqual('Four / 4')
        })
        it('should return "Zero * 0" when input is 2,3,0,0', () => {
            expect(CreateApp(pattern,3,0,0).generate()).toEqual('Zero * 0')
        })
        it('should return "Seven + 1" when input is 2,1,7,7', () => {
            expect(CreateApp(pattern,1,7,7).generate()).toEqual('Seven + 7')
        })
        it('should return "Six - 6" when input is 2,2,6,6', () => {
            expect(CreateApp(pattern,2,6,6).generate()).toEqual('Six - 6')
        })
    })
})
function CreateApp(Pattern, Operator, LeftOperator, RightOperator) {
    return new Captcha(Pattern, Operator, LeftOperator, RightOperator);
}
