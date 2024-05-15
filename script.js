let num = document.querySelector('.num');
let number = 10;
num.value = number;
let plusOne = document.querySelector('.plus-one');
plusOne.addEventListener('click', function () {
  number++;
  num.value = number;
});

let minusOne = document.querySelector('.minus-one');
minusOne.addEventListener('click', function () {
  number--;
  num.value = number;
});

let plusFive = document.querySelector('.plus-five');
plusFive.addEventListener('click', function () {
  number = number + 5;
  num.value = number;
});

let minusFive = document.querySelector('.minus-five');
minusFive.addEventListener('click', function () {
  number = number - 5;
  num.value = number;
});
