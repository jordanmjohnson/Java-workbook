//declares the name John Smith then replaces John with Pete
let user = {
    name: "John",
    surname:"Smith",
    name: "Pete"
};
//deletes both names leaving just Smith
delete name;

let schedule = {};
alert( isEmpty(schedule) ); 
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); 
 
 function isEmpty(obj){
for (let key in obj){
  return false;
}
return true;
 }
//declares salaries for John, Ann, and Pete
 let salaries = { 
    John: 100,
    Ann: 160,
    Pete: 130
  }
  //adds up all their salaries which equals 390
  sum = salaries.John + salaries.Ann + salaries.Pete;
  alert(sum);
  
  // end of 3.1) displays an object named menu with a height of 300 and a width of 200
  let menu = {
      width: 200,
      weight:300,
      title: "My menu"
  };
  //multiplies only the number values of keys inside the object by 2
  function multiplynumeric(menu){
      for(let key in menu){
          if(typeof menu[key]== 'number')
          obj[key] *=2;
      }
  };

  function makeUser(){
      return{
          name: "John",
          ref: this
      };
  }
  let user = makeUser();
  alert(user.ref.name); // this will result in an error due to ref being read literally as if it has a name but since it doesn't it just returns an error

  // if rewritten like this the ref will act as a function and return the name John
function makeUser(){
    return{
        name:"John",
        ref(){
            return this;
        }
    };
}
let user=makeUser();
alert(user.ref().name);

function Calculator(){ //creates calculator function
    
    this.value1 = 0; //makes the original value of num 1 and 2 0
    this.value2 = 0; 
  
    this.read = function(){ //reads off both this.values as numbers and asks user to enter values for them
      this.value1 = Number(prompt("Enter the first value", 0)); 
      this.value2 = Number(prompt("Enter the second value", 0)); 
    }
  
    this.sum = function(){ //adds value 1 and 2 together
      return(this.value1 + this.value2);
    }
  
    this.mul = function(){ //multiplies value 1 and 2 together
      return(this.value1 * this.value2); 
    }
  
  }
  
  let calculator = new Calculator(); //calls function for original values
  calculator.read(); //links and calls the read function to prompt user for input
  
  console.log( calculator.sum() ); //logs the outcome of summing value 1 and 2
  console.log( calculator.mul() ); //logs the outcome of multiplying value 1 and 2
  
  let ladder = { // end of 3.4) creates ladder using increment and decrement and returns the steps sequence
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  }

  let obj = {}; // creates object that makes A = B

  function A() { return obj; }
  function B() { return obj; }
  
  alert( new A() == new B() );
//creates object calculator that prompts the user to determine what a and b equal after that it adds them and multiplies them
  function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );

// end of 3.5) Prompts user to put in two numbers and adds them together
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);

//bad code: needs spaces between arguments, bad placement of brackets, and poor writing overall
function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{
  alert(pow(x,n))
}
//fixed code
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
  alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else {
  alert( pow(x, n) );
}