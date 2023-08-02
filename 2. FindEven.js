
/* 2) Topic: Filter Even Numbers
Description:

In this assignment, you will create a JavaScript program that filters even numbers from a given array and displays the filtered numbers on the webpage.
Output is:-
Original Array: [12, 34, 45, 23, 6, 78, 54, 90]

Filtered Even Numbers: [12, 34, 6, 78, 54, 90]

Tasks:
Implement a JavaScript function to filter even numbers from the array.

Display /console.log the filtered even numbers on the code.*/



function filterEvenNumbers(arr) {
    // Filter even numbers from the array
    const filteredNumbers = arr.filter(num => num % 2 === 0);
  
  
    // Display the original array
    console.log('Original Array:', arr);
  
  
    // Display the filtered even numbers
    console.log('Filtered Even Numbers:', filteredNumbers);
  }
  
  
  // Example usage
  const numbers = [12, 34, 45, 23, 6, 78, 54, 90];
  filterEvenNumbers(numbers);
  