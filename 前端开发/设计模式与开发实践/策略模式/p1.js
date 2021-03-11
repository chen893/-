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

var performanceS = function(){};

performanceS.prototype.calculate = function (salary) {
  return salary *4;
}
performanceA = function (){};
performanceA.prototype.calculate = function( salary ) {
  return salary *3;
}

performanceB = function (){};
performanceB.prototype.calculate = function( salary ) {
  return salary *2;
}

var Bonus = function(){
  this.salary = null;
  this.stategy = null;
}

Bonus.prototype.setSalary = function(salary) {
  this.salary = salary;
}

Bonus.prototype.setStrategy = function(strategy) {
  this.strategy = strategy;
}

Bonus.prototype.getBonus = function(){
  if(!this.strategy){
    throw new Error('未设置stratege属性');
  }
  return this.strategy.calculate(this.salary);
}



var bonus = new Bonus();

bonus.setSalary(1000);
bonus.setStrategy(new performanceS());



var stategies = {
  "S": function(salary){
    return salary*4;
  },
  "A": function(salary){
    return salary*3;
  },
  "B": function(salary){
    return salary*2;
  }
}

function calculateBonus(level,salary){
  return stategies[level](salary)
}

console.log(calculateBonus('S',2000));
console.log(calculateBonus('A',1000));