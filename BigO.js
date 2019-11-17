// What is good code?
//  1. Readable
//  2. Scalable
// Space and Time Complexity - Memory and Speed

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

const findNemo2 = array => {
  array.forEach(fish => {
    if (fish === "nemo") {
      console.log("found nemo");
    }
  });
};

const findNemo3 = array => {
  for (let i of array) {
    if (fish === "nemo") {
      console.log("found nemo");
    }
  }
};

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

// Space Complexity
function booo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("boooo");
  }
}

booo([1, 2, 3, 4, 5]); // O(1) only takes memory for i

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

arrayOfHiNTimes(6); // O(n) each item in array takes memory space

const array = ["hi", "my", "bye"];
array[0]; // O(1)
array[array.length - 1]; // O(1)

const array1 = [
  {
    tweet: hi,
    date: 2012
  },
  {
    tweet: my,
    date: 2014
  },
  {
    tweet: bye,
    date: 2018
  }
];
// O(n^2) --- nested loop

"asdfasdfjaldfja".length; //O(1) --- depending on language and method this will vary
