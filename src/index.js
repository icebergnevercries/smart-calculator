class SmartCalculator {
  constructor(initialValue) {
    this.solution = [];
    this.solution.push(initialValue);
    this.modifsolution = [];
    this.lenghtarr = 1;
    this.modiflenghtarr = 1;
    this.flag = true;
  }

  add(number) {
    this.solution.push('+');
    this.solution.push(number);
    this.lenghtarr += 2;
    return this;
  }
  
  subtract(number) {
    this.solution.push('-');
    this.solution.push(number);
    this.lenghtarr += 2;
    return this;
  }

  multiply(number) {
    this.solution.push('*');
    this.solution.push(number);
    this.lenghtarr += 2;
    return this;
  }

  devide(number) {
    this.solution.push('/');
    this.solution.push(number);
    this.lenghtarr += 2;
    return this;
  }

  pow(number) {
    this.solution.push('**');
    this.solution.push(number);
    this.lenghtarr += 2;
    return this;
  }

  valueOf() {

    if(this.flag){
      
      for(let i = 0; i < this.lenghtarr/* && this.flag*/; i++){
        this.modifsolution.push(this.solution[i]);
        if(i == this.lenghtarr - 1){        
          this.flag = false;
          this.modiflenghtarr = this.lenghtarr;
        }
      }    
  
      for(let i = this.modiflenghtarr; i >= 0 ; i -= 2 ){
        if(this.modifsolution[i] == '**'){
          this.modifsolution.splice(i - 1, 3, this.modifsolution[i - 1] ** this.modifsolution[i + 1]);    
          this.modiflenghtarr -= 2;    
        }
      }
  
      for(let i = 1; i < this.modiflenghtarr; i += 2){
        if(this.modifsolution[i] == '*'){
          this.modifsolution.splice(i - 1, 3, this.modifsolution[i - 1] * this.modifsolution[i + 1]);    
          this.modiflenghtarr -= 2;    
          i -= 2;
        }
        else if(this.modifsolution[i] == '/'){
          this.modifsolution.splice(i - 1, 3, this.modifsolution[i - 1] / this.modifsolution[i + 1]);    
          this.modiflenghtarr -= 2;    
          i -= 2;
        }
      }
  
      for(let i = 1; i < this.modiflenghtarr; i += 2){
        if(this.modifsolution[i] == '+'){
          this.modifsolution.splice(i - 1, 3, this.modifsolution[i - 1] + this.modifsolution[i + 1]);    
          this.modiflenghtarr -= 2;    
          i -= 2;
        }
        else if(this.modifsolution[i] == '-'){
          this.modifsolution.splice(i - 1, 3, this.modifsolution[i - 1] - this.modifsolution[i + 1]);    
          this.modiflenghtarr -= 2;    
          i -= 2;
        }
      } 
    }

    return this.modifsolution[0];
  }
}

module.exports = SmartCalculator;
