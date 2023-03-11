function calculatePrice() {
    const priceList = document.getElementById("pricelist").value;
    const amount = parseInt(document.getElementById("amount").value);
    const discount = parseInt(document.getElementById("discount").value);
  
    // Parse the price list into an array of numbers
    const prices = priceList.split(",").map(Number);
  
    // Calculate the total price before discount
    const totalPrice = prices.reduce((sum, price) => sum + price, 0) * amount;
  
    // Calculate the discount amount
    const discountAmount = totalPrice * (discount / 100);
  
    // Calculate the total price after discount
    const totalPriceAfterDiscount = totalPrice - discountAmount;
  
    // Display the total price after discount on the page
    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.innerText = `$${totalPriceAfterDiscount.toFixed(2)}`;
  
    // Add the current input to the history
    const historyElement = document.getElementById("history");
    const listItem = document.createElement("li");
    listItem.innerText = `Price List: ${priceList}, Amount: ${amount}, Discount: ${discount}% => Total Price: $${totalPriceAfterDiscount.toFixed(2)}`;
    historyElement.appendChild(listItem);
  }
  