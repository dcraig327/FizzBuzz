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

  if (number >= 1) {
    log("FizzBuzz");
  }
  for (let i = 2; i <= number; i++) {
    let fizzbuzz = "";

    if (i % 3 == 0) {
      fizzbuzz += "Fizz";
    }
    if (i % 5 == 0) {
      fizzbuzz += "Buzz";
    }
    if (!fizzbuzz) {
      fizzbuzz = i.toString();
    }

    log(fizzbuzz);
  }
}

main();
