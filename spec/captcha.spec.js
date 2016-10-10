let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
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
         else if (P === 2)  return num[R]; 
     }}
function leftOperator(P, L) {
    this.toString = function() {
        if (P === 1) return num[L];
        else if (P === 2) return letter[L];
        }}
describe('Captcha App', () => {
    describe('Pattern 1', () => {
        let pattern = 1;
        for (let k = 1; k < 5; k++) {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) 
                    it('should return " ' + num[i] + ' ' + operator[k - 1] + ' ' + letter[j] + '" when input is ' + pattern + ',' + k + ',' + num[i] + ',' + num[j], () => {
                    expect(CreateApp(pattern, k, num[i], num[j]).generate()).toEqual(num[i] + ' ' + operator[k - 1] + ' ' + letter[j])
                })}}})
    describe('Pattern 2', () => {
        let pattern = 2;
        for (let k = 1; k < 5; k++) {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) 
                    it('should return " ' + letter[i] + ' ' + operator[k - 1] + ' ' + num[j] + '" when input is ' + pattern + ',' + k + ',' + num[i] + ',' + num[j], () => {
                    expect(CreateApp(pattern, k, num[i], num[j]).generate()).toEqual(letter[i] + ' ' + operator[k - 1] + ' ' + num[j])
                })}}})})
function CreateApp(Pattern, Operator, LeftOperator, RightOperator) {
    return new Captcha(Pattern, Operator, LeftOperator, RightOperator);
}