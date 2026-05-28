// File for backend calculation
// Declaring and Initializing variables using DOM
// Using constants variables so I accidentally not change it later
const bill_amount = document.getElementById("bill_amount");
const currency = document.getElementById("currency");
const tip_percent = document.getElementById("tip_percent");
const tip_button_1 = document.getElementById("tip_button_1");
const tip_button_2 = document.getElementById("tip_button_2");
const tip_button_3 = document.getElementById("tip_button_3");
const number_of_people = document.getElementById("number_of_people");
const result_total_tip = document.getElementById("result_total_tip");
const result_total_amount = document.getElementById("result_total_amount");
const result_pay_per_person = document.getElementById("result_pay_per_person");
const error_bill_amount = document.getElementById("error_bill_amount");
const error_tip_percent = document.getElementById("error_tip_percent");
const error_number_of_people = document.getElementById("error_number_of_people");

// Implementing a function to calculate
function calculate() {

    const get_bill_amount = parseFloat(bill_amount.value) || 0; // adding || (OR operator) to make sure that if user enters any string or invalid integer, the program will raise the error    
    if (get_bill_amount <= 0) { // conditional statements to show error display tag; upon checking conditions givien in instructions
        error_bill_amount.classList.add("show");
        return;
    }
    else {
        error_bill_amount.classList.remove("show");
    }

    const get_tip_percent = parseFloat(tip_percent.value) / 100.0 || 0;
    if (get_tip_percent < 0) {
        error_tip_percent.classList.add("show");
        return;
    }
    else {
        error_tip_percent.classList.remove("show");
    }

    const get_number_of_people = parseInt(number_of_people.value) || 1;
    if (get_number_of_people < 0) {
        error_number_of_people.classList.add("show");
        return;
    }
    else {
        error_number_of_people.classList.remove("show");
    }

    const get_currency_value = currency.value;

    //calculation steps
    const total_tip = get_bill_amount * get_tip_percent;
    const total_amount = get_bill_amount + total_tip;
    const pay_per_person = total_amount / get_number_of_people;

    result_total_tip.textContent = (get_bill_amount <= 0) ? 0 : total_tip + get_currency_value;
    result_total_amount.textContent = (get_tip_percent < 0) ? 0 : total_amount;
    result_pay_per_person.textContent = (get_number_of_people <= 0) ? 0 : pay_per_person;
}

//Function to change preset of tip_percent button
function change_tip_percent_button_preset(tip_value) {

    if (tip_value != 10) {
        document.getElementById("tip_button_1").style.backgroundColor = "";
    }
    if (tip_value != 15) {
        document.getElementById("tip_button_2").style.backgroundColor = "";
    }
    if (tip_value != 20) {
        document.getElementById("tip_button_3").style.backgroundColor = "";
    }

    this.style.backgroundColor = "green";
    tip_percent.value = tip_value;
    calculate();
}

// Adding event listeners to call the calculate function
bill_amount.addEventListener("input", calculate);

document.getElementById("tip_button_1").addEventListener("click", function () {
    change_tip_percent_button_preset.call(this, 10);
});

document.getElementById("tip_button_2").addEventListener("click", function () {
    change_tip_percent_button_preset.call(this, 15);
});

document.getElementById("tip_button_3").addEventListener("click", function () {
    change_tip_percent_button_preset.call(this, 20);
});

tip_percent.addEventListener("input", calculate);

number_of_people.addEventListener("input", calculate);
currency.addEventListener("change", calculate);