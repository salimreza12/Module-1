/*
4) Topic: Grade Calculator (JavaScript Switch Case)
Description:
Create a function called "calculateGrade" that takes a student's score as input and returns the corresponding grade using the following scale:
90 or above: 'A'
80 to 89: 'B'
70 to 79: 'C'
60 to 69: 'D'
Below 60: 'F'
 */

function calculateGrade(score) {
    switch (true) {
      case score >= 90:
        return 'A';
      case score >= 80:
        return 'B';
      case score >= 70:
        return 'C';
      case score >= 60:
        return 'D';
      default:
        return 'F';
    }
  }
 
  // Example usage:
  const score = 85;
  const grade = calculateGrade(score);
  console.log(`Score: ${score}, Grade: ${grade}`);
