var calculateBonus = function (performanceLevel, salary) {
  if( performanceLevel === 'S') {
    return salary*3;
  }
  if( performanceLevel === 'A') {
    return salary*2;
  }
  if( performanceLevel === 'B') {
    return salary*1;
  }
}


var calculateBonus = function (performanceLevel, salary){
  if( performanceLevel === 'S') {
    return performS(salary);
  }

  if( performanceLevel === 'A') {
    return performA(salary);
  }

  if( performanceLevel === 'B') {
    return performB(salary);
  }
}

function performA(salary) {
  return salary*3;
}
function performB (salary) {
  return salary*2;
}
function performC (salary) {
  return salary;
}

function Bonus(){
  this.salary = 0;
  this.performFun = null;
  this.calculateBonus = ()=>{
    return this.performFun(this.salary);
  }
  this.setSalary= (salary)=>{
    this.salary = salary;
  }
} 

let b  = new Bonus ();
b.setSalary(100);

let a = new Bonus();
console.log(a);
console.log(b);