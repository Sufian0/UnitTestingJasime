window.addEventListener('DOMContentLoaded', function() {
  const calcForm = document.getElementById("calc-form");
  if (calcForm) {
    setupIntialValues();
    calcForm.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() { //this function sets up the initial values
  //but also is the main function that starts by calling other functions.
  const valueAmount = 2500;
  const valueYear = 5;
  const valueRate = 2.5;
  //the above are initial values that are hard coded in.
  const initialAmount = document.getElementById("loan-amount");
  initialAmount.value = valueAmount;
  const initialYear = document.getElementById("loan-years");
  initialYear.value = valueYear;
  const initialRate = document.getElementById("loan-rate");
  initialRate.value = valueRate;
  //above code receives input from the form
  update(); // calls the update() function.
}

function update() {
  const currentUIValues = getCurrentUIValues(); //current UI values is now amount, years and rate.
  updateMonthly(calculateMonthlyPayment(currentUIValues)); /* pass currentUIValues
  which is amount, years and rate into the function calculateMonthlyPayment. The 
  result of that is then returned into updateMonthly() function. This then returns 
  the values after computation of the values inputted thus achieving the primary
  objective of the program. */
}

function calculateMonthlyPayment(values) { //currentUIValues is passed into 
  //this function and becomes the variable "values." Note that amount, years and,
  // rate were the values passed as the variable "values." 
  const monthlyRate = (values.rate / 100) / 12; //taking the rate portion of values,  
  //and forming a variable from it.
  const n = Math.floor(values.years * 12); //this is the power variable. to the power
  // of n.
  if(monthlyRate > 0 &&
    n > 0 
    ) {
    return ( //return the value from the formula that was given, to the second decimal point.
      (monthlyRate * values.amount) /
      (1 - Math.pow((1 + monthlyRate), -n))
    ).toFixed(2);
  }
  else if (n <= 0 ||
    monthlyRate <= 0) {
    return (-100);
  }
}

function updateMonthly(monthly) { //taking the value of calculateMonthlyPayment.
  //then updates the actual monthly payment.
  const monthlyUI = document.getElementById("monthly-payment");
  if (monthly == -100) {
    monthlyUI.innerText = "'Terms in Years' and 'Yearly Rate' must be a positive non zero number.";
  }
  else {
  monthlyUI.innerText = "$" + monthly;
  }
}