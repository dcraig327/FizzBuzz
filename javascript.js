const debugging = true;

// how is this in scope?
if (debugging) {
  log = function (string) {
    console.log(string);
  };
} else {
  log = function (string) {};
}

// loop and print from 1 to the number entered
// %3 print Fizz instead of the number
// %5 print Buzz instead of the number
// %3 and %5 print FizzBuzz

function getNumber() {
  return parseInt(prompt("Enter a FizzBuzz number."));
}

function main() {
  let number = getNumber();
  //log("Starting number: " + number);

  for (let i = 1; i <= number; i++) {
    if (i % 15 == 0) {
      log("FizzBuzz");
    } else if (i % 3 == 0) {
      log("Fizz");
    } else if (i % 5 == 0) {
      log("Buzz");
    } else {
      log(i);
    }
  }
}

main();
