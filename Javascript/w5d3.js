function madlib(verb, adjective, noun){
  console.log(`We Shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`);
}

function isSubstring(search_string, sub_string){
  return search_string.includes(sub_string);
}

function fizzBuzz(array){
  let result = [];
  for (let i = 0; i < array.length; i++){
    if(array[i] % 3 ===0 && array[i] % 5 === 0){
      continue;
    }
    else if (array[i] % 3 === 0) {
      result.push(array[i]);
    }
    else if (array[i] % 5 === 0){
      result.push(array[i]);
    }
  }
  return result;
}

function isPrime(number){
  let i = 2;
  while (i < number ) {
    if (number % i === 0 && number !== 2) {
      return false;
    }
    i += 1;
  }
  return true;
}

function sumOfNPrimes(n){
  let i = 0;
  let sum = 0;
  let i2 = 2;
  while (i < n){
    if (isPrime(i2)){
      sum += i2;
      i += 1;
    }
    i2 += 1;
  }
  return sum;
}

function allOrNothing(mod, ...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % mod !== 0) {
      return false;
    }
  }

  return true;
}

function titleize(arr, callback){
  let titled = [];
  for (var i = 0; i < arr.length; i++) {
    titled.push(`Mx. ${arr[i]} Jingleheimer Schmidt`);
  }
  callback(titled);
}

var Elephant = function(name, height, tricks){
  this.name = name;
  this.height = height;
  this.tricks  = tricks;
};

Elephant.prototype.trumpet = function(){
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!`);
};

Elephant.prototype.grow = function(){
  this.height += 12;
};

Elephant.prototype.addTrick = function(trick){
  this.tricks.push(trick);
};

Elephant.prototype.play = function(){
  console.log(`${this.name} is ${this.tricks[Math.floor(Math.random() * this.tricks.length)]}`);
};

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

function dinerBreakfast(food) {
  let order = "I'd like scrambled eggs";
  function addOrder(){
    order += ` and ${food}`;
  }
  return order;
}
