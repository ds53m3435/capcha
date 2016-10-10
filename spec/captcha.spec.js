function Captcha(Pattern, Operator, LeftOperator, RightOperator){
    this.generate = function(){
        let Oper = new OP(Operator);
        let Right = new rightOperator(Pattern,RightOperator);
        let Left = new leftOperator(Pattern,LeftOperator);
        return Left+' '+Oper+' '+Right;
    }
}
function OP(O) {
    this.toString = function(){
        let operator = ['+','-','*','/'];
        return operator[O - 1];
    }
}
function rightOperator(P,R) {
    this.toString = function(){
      if(P === 1) {
        let right = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
        return right[R];
      }
      else if(P === 2) {
        let right = ['0','1','2','3','4','5','6','7','8','9'];
        return right[R];
      }
    }
}
function leftOperator(P,L) {
    this.toString = function(){
      if(P === 2) {
        let left = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
        return left[L];
      }
      else if(P === 1){
        let left = ['0','1','2','3','4','5','6','7','8','9'];
        return left[L];
      }
    }
}

describe('Captcha App', () => {
    describe('Pattern 1', () => {
        let pattern = 1;
        it('should return "1 + One" when input is 1,1,1,1', () => {
            expect(CreateApp(pattern,1,1,1).generate()).toEqual('1 + One')
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
    })
})
function CreateApp(Pattern, Operator, LeftOperator, RightOperator) {
  return new Captcha(Pattern, Operator, LeftOperator, RightOperator);
}
