function transferAmount(n) {
    //checking conditions
    if (n === null || n === undefined) {
      console.log("Please Enter a valid number");
    }
    else if (isNaN(n) || n <= 0) {
      console.log("please Enter a number not less than 0");
    }
    else {
    if (n <= 5000) {
      console.log("₦10:00");
    }
    else if (n >= 5001 && n <= 50000) {
      console.log("₦25:00");
    }
    else  {
      console.log("₦50:00");
    }
  }
  }
  transferAmount(59000);
  transferAmount("root");