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
      if(P === 1){
        let left = ['0','1','2','3','4','5','6','7','8','9'];
        return left[L];
      }
      else if(P === 2) {
        let left = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
        return left[L];
      }
    }
}
describe('Captcha App', () => {
        let num =['0','1','2','3','4','5','6','7','8','9'];
        let letter = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
        let operator = ['+','-','*','/'];
    describe('Pattern 1', () => {
        let pattern = 1;
       for(let k=1;k<5;k++){
        for(let i=0;i<10;i++){
            for(let j=0;j<10;j++) 
                it('should return " ' +num[i] +' '+operator[k-1] +' '+letter[j] +'" when input is '+pattern +','+k+','+num[i]+','+num[j], () => 
                {
                expect(CreateApp(pattern,k,num[i],num[j]).generate()).toEqual(num[i] +' '+operator[k-1] +' '+  letter[j])
        })}}
    })
    describe('Pattern 2', () => {
        let pattern = 2;
        for(let k=1;k<5;k++){
        for(let i=0;i<10;i++){
            for(let j=0;j<10;j++) 
                it('should return " ' +letter[i] +' '+operator[k-1] +' '+num[j] +'" when input is '+pattern +','+k+','+num[i]+','+num[j], () => 
                {
                expect(CreateApp(pattern,k,num[i],num[j]).generate()).toEqual(letter[i] +' '+operator[k-1] +' '+  num[j])
        })}}
    })
})
function CreateApp(Pattern, Operator, LeftOperator, RightOperator) {
  return new Captcha(Pattern, Operator, LeftOperator, RightOperator);
}
