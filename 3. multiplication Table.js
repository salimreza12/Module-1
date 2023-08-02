/*
3) Topic: Multiplication Table Generator
Description:
In this assignment, you will create a JavaScript program that generates a multiplication table for a given number. The program will take input from the user, calculate the multiplication table, and display it on the console.

Tasks:

Implement a JavaScript function to calculate the multiplication table using a for loop.

Display the generated multiplication table on the console.
Examples:

Generate Multiplication Table for: 5
1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25
6 x 5 = 3
7 x 5 = 35
8 x 5 = 40
9 x 5 = 45
10 x 5 = 50
 */


function generateMultiplicationTable(number) {
    console.log(`Generate Multiplication Table for: ${number}\n`);
    for (let i = 1; i <= 10; i++) {
      const result = i * number;
      console.log(`${i} x ${number} = ${result}`);
    }
  }
 
  // Example usage:
  const number = 5;
  generateMultiplicationTable(number);
 
