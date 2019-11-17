const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank"
];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
    }
  }
}

findNemo(everyone); // O(n) --> Linear Time

function effecientNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
      break; // exits loop if condition is met -- but BIG O only cares about worse case so what if nemo was at end of array
    }
  }
}

effecientNemo(everyone); // still O(n) because nemo could be at end -- worst case

const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]);
  console.log(boxes[1]);
}

logFirstTwoBoxes(boxes); // O(2) --> two operations - Constant Time - no matter the inputs its always constant --EXCELLENT

// challenge
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.lenth; i++) {
    //O(n)     n = the input --> Linear Time
    anotherFunction(); //O(n)
    let stranger = true; //O(n)
    a++; //O(n)
  }
  return a; //O(1)
}

funChallenge(); // BIG O(3 + 4n) ---- gets simplified to O(n)

// challenge 2
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know";
}

anotherFunChallenge(); // BIG O(4 + 5n) ---- gets simplified to O(n)

// nested loops
const boxes = ["a", "b", "c", "d", "e"];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes); // O(n^2) -- Quadratic Time
