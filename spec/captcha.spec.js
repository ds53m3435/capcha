function Captcha(Pattern, Operator, LeftOperator, RightOperator){
    this.generate() = function(){
      if(Pattern === 1) {
        let Oper = Operator(Operator);
        let Right = rightOperator(Pattern,RightOperator);
        let Left = leftOperator(Pattern,LeftOperator);
      }
    }
}
function Operator(O) {
    this.toString() = function(){
        let operator = ['+','-','*','/'];
        return operator[O - 1];
    }
}
function rightOperator(P,R) {
    this.toString() = function(){
      if(P === 1) {
        let right = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
        return operator[R];
      }
      else if(P === 2) {
        let right = ['0','1','2','3','4','5','6','7','8','9'];
        return operator[R];
      }
    }
}
function leftOperator(P,L) {
    this.toString() = function(){
      if(P === 2) {
        let left = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
        return operator[L];
      }
      else if(P === 1){
        let right = ['0','1','2','3','4','5','6','7','8','9'];
        return operator[L];
      }
    }
}
describe('Captcha App', () => {
    describe('Pattern 1', () => {
        let pattern = 1;
        it('should return "1 + One" when input is 1,1,1,1', () => {
            expect(CreateApp(pattern,1,1,1).generate()).toEqual('1 + One')
        })
        /*it('should return "2 + Two" when input is 1,1,2,2', () => {
            let app = new Captcha(pattern,1,2,2 )
            expect(app.generate()).toEqual('2 + Two')
        })*/
    })
    /*describe('Pattern 2', () => {
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
    })*/
})
function CreateApp(Pattern, Operator, LeftOperator, RightOperator) {
  new Captcha(Pattern, Operator, LeftOperator, RightOperator)
}
