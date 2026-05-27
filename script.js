// File for backend calculation
// Declaring and Initializing variables using DOM
// Using constants variables so I accidentally not change it later
const bill_amount = document.getElementById("bill_amount");
const currency = document.getElementById("currency");
const tip_percent = (document.getElementById("tip_percent")) / 100.0;
const number_of_people = document.getElementById("number_of_people");
const result_total_tip = document.getElementById("result_total_tip");
const result_total_amount = document.getElementById("result_total_amount");
const result_pay_per_person = document.getElementById("result_pay_per_person");

// Implementing a function to calculate
function calculate() {
    const total_tip = tip_percent * bill_amount;
    const total_bill = total_tip + bill_amount;
    const pay_per_person = total_bill / number_of_people;

    result_total_tip.textContent = total_tip;
    result_total_amount = total_bill;
    result_pay_per_person = pay_per_person;
}

// Adding event listeners to call the calculate function
bill_amount.addEventListener("input",calculate);
tip_percent.addEventListener("input",calculate);
number_of_people.addEventListener("input",calculate);
currency.addEventListener("change",calculate);