// File for backend calculation
// Declaring and Initializing variables using DOM
// Using constants variables so I accidentally not change it later
const bill_amount = document.getElementById("bill_amount");
const currency = document.getElementById("currency");
const tip_percent = document.getElementById("tip_percent");
const number_of_people = document.getElementById("number_of_people");
const result_total_tip = document.getElementById("result_total_tip");
const result_total_amount = document.getElementById("result_total_amount");
const result_pay_per_person = document.getElementById("result_pay_per_person");

// Implementing a function to calculate
function calculate() {
    const get_bill_amount = parseFloat(bill_amount.value) || -1; // Adding || (OR operator) to make sure that if user enters any string or invalid integer, the program will raise the error
    if (get_bill_amount < 0) { //Conditional Statement

    }
    const get_tip_percent = parseFloat(tip_percent.value) / 100.0 || -1;
    if (get_tip_percent < 0) {

    }
    const get_number_of_people = parseInt(number_of_people.value) || -1;
    if (get_number_of_people < 0) {

    }
    const get_currency_value = currency.value;

    const total_tip = get_tip_percent * get_bill_amount * get_currency_value;
    const total_bill = total_tip + get_bill_amount;
    const pay_per_person = (total_bill / get_number_of_people);

    result_total_tip.textContent = total_tip;
    result_total_amount.textContent = total_bill;
    result_pay_per_person.textContent = pay_per_person;
}

// Adding event listeners to call the calculate function
bill_amount.addEventListener("input", calculate);
tip_percent.addEventListener("input", calculate);
number_of_people.addEventListener("input", calculate);
currency.addEventListener("change", calculate);