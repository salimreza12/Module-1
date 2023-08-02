/* 
1) Topic: Online Store Discount Calculator (If-Else Statement)

Description:
You are tasked with creating a simple discount calculator for an online store. The store offers discounts based on the total purchase amount. Customers can avail different discounts depending on their total spending. Your goal is to implement a JavaScript program that takes the total purchase amount as input and calculates the discounted amount (if any) based on the 

following rules:

If the total purchase amount is less than $50, no discount is applied.

If the total purchase amount is between $50 and $100 (both inclusive), apply a 5% discount.

If the total purchase amount is between $100 and $200 (both inclusive), apply a 10% discount.

If the total purchase amount is $200 or more, apply a 15% discount.

Tasks:

Implement the JavaScript function to calculate the discounted amount based on the input.

Display / console.log the “discounted amount & total amount + discount amount “
*/


function calculateDiscountedAmount(totalPurchaseAmount) {
    let discountPercentage = 0;
    let discountedAmount = 0;
 
    if (totalPurchaseAmount >= 50 && totalPurchaseAmount <= 100) {
      discountPercentage = 0.05; // 5% discount
    } else if (totalPurchaseAmount > 100 && totalPurchaseAmount <= 200) {
      discountPercentage = 0.1; // 10% discount
    } else if (totalPurchaseAmount > 200) {
      discountPercentage = 0.15; // 15% discount
    }
 
    discountedAmount = totalPurchaseAmount - (totalPurchaseAmount * discountPercentage);
 
    console.log(`Discounted Amount: $${discountedAmount.toFixed(2)}`);
    console.log(`Total Amount + Discount Amount: $${(totalPurchaseAmount - discountedAmount).toFixed(2)}`);
  }
 
  // Example usage:
  const totalPurchaseAmount = 180;
  calculateDiscountedAmount(totalPurchaseAmount);