// ARRAY ASSIGHMENT
//Q NO 1
var fruits = ["mango", "banana", "apple", "watermelon", "orange"];
console.log("fruits", fruits);
//Q NO 2
var numbers = [10, 20, 30, 40, 50];
console.log("numbers", numbers);
//Q NO 3
var thirdfruit = fruits[2];
console.log("thirdfruit", thirdfruit);
//Q NO 4
numbers[1] = 25;
console.log("change the secocond element of the number Array:", numbers);
//Q NO 5
fruits.push("grapes");
console.log("Add element End of array ", fruits);
//Q No 6
fruits.pop();
console.log("remove last Element of array", fruits);
//Q No 7
var firstFruit = fruits.shift();
console.log("remove first element of array", fruits);
//Q No 8    
fruits.unshift("kiwi");
console.log("Add element begining of array", fruits);
//Q No 9
fruits.splice(1, 2);
console.log("removing element starting of index 1:", fruits);
//Q No 10
fruits.splice(2, 0, "pineapple", "pear");
console.log("inserting element at index2", fruits);
//Q No 11
var citrusFruits = fruits.slice(0, 2);
console.log("first two element;", citrusFruits);
//Q NO 12
var lastTwoFruits = fruits.slice(-2);
console.log("last two element:", lastTwoFruits);
