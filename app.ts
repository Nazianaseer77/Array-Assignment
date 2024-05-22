// ARRAY ASSIGHMENT

//Q NO 1:Create an array named fruits that contains the following string
//elements: "apple", "banana", "mango", "orange".

let fruits: string []=["mango","banana","apple","watermelon","orange"];
console.log("fruits",fruits);

//Q NO 2:Declare an array named numbers that can contain only number
//elements and initialize it with the values 10, 20, 30, and 40.

const numbers: number[]=[10,20,30,40,];
console.log("numbers",numbers);

//Q NO 3:Access the third element of the fruits array and assign it to a
//variable named thirdFruit.

let thirdfruit=fruits[2];
console.log("thirdfruit",thirdfruit);

//Q NO 4:Change the second element of the numbers array to 25.

numbers[1] = 25;
console.log("change the secocond element of the number Array:", numbers);

//Q NO 5:Add the element "grape" to the end of the fruits array using the
//method.

fruits.push("grapes");
console.log("Add element End of array ",fruits);

//Q No 6:Remove the last element from the fruits array using the
//method and assign it to a variable named lastFruit.

fruits.pop();
console.log("remove last Element of array", fruits);

//Q No 7:Remove the first element from the fruits array using the
//method and assign it to a variable named firstFruit.

let firstFruit = fruits.shift();
console.log("remove first element of array",fruits);

//Q No 8:Add the element "kiwi" to the beginning of the fruits array
//using the method.    

fruits.unshift("kiwi");
console.log("Add element begining of array",fruits);

//Q No 9:Remove 2 elements from the fruits array starting from index 1
//using the method.

fruits.splice(1,2);
console.log("removing element starting of index 1:", fruits);

//Q No 10:Insert the elements "pineapple" and "pear" at index 2 of the
//fruits array using the method.

fruits.splice(2,0, "pineapple","pear");
console.log("inserting element at index2",fruits);

//Q No 11:Create a new array named citrusFruits that contains the first
//two elements of the fruits array using the method.

let citrusFruits = fruits.slice(0,2);
console.log("first two element;", citrusFruits);

//Q NO 12:Create a new array named lastTwoFruits that contains the last
//two elements of the fruits array using the method.

let lastTwoFruits = fruits.slice(-2);
console.log("last two element:", lastTwoFruits);
