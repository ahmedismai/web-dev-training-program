// This variable stores my age in human years.
const myAge = 23;

// This variable represents the first two years of a dog’s life.
let earlyYears = 2;

// Each of the first two years counts as 10.5 dog years.
earlyYears *= 10.5;

// This variable stores the number of human years after the first two.
let laterYears = myAge - 2;

// Each human year after the first two equals 4 dog years.
laterYears *= 4;

// This variable adds early and later years to get my total age in dog years.
const myAgeInDogYears = earlyYears + laterYears;

// Converts my name to all lowercase letters and stores it.
const myName = "Ahmed".toLowerCase();

// Logs a sentence about my age in both human and dog years using string interpolation.
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
