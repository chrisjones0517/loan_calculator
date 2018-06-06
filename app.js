const loanAmount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const calcBtn = document.querySelector('.btn');
const monthlyPmt = document.querySelector('#monthly-payment');
const totalPmt = document.querySelector('#total-payment');
const totalInt = document.querySelector('#total-interest');
const loader = document.querySelector('#loading');
const compounding = document.querySelectorAll('.form-check-input');
const loanForm = document.querySelector('#loan-form');

loader.style.display = 'none';

calcBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loader.style.display = 'block';
    
    setTimeout(() => {
         loader.style.display = 'none';
         calculate(loanAmount, interest, years, compounding);
    }, 1000);
});

function calculate(principal, interest, term, formula) {
    let p = principal.value;
    let y = years.value;
    let i = interest.value / 100;
    let ei = i / 12; // interest rate divided over 12 months
    let n = y * 12; // number of payments over loan term
    let monthlyPayment = p / ((Math.pow((1 + ei), n) - 1) / (ei * Math.pow((1 + ei), n)));
    let totalPayment = monthlyPayment * n;
    let totalInterest = totalPayment - p;

    if (!loanAmount.value) {
        alert("You must choose a loan amout!");
        
    } else if (!interest.value) {
        alert('You must choose an interest amount!');

    } else if (!years.value) {
        alert('You must choose a loan term!');

    } else {
        totalPmt.value = totalPayment.toFixed(2);
        monthlyPmt.value = monthlyPayment.toFixed(2);
        totalInt.value = totalInterest.toFixed(2);
    }
}

function progressiveStep() {
    console.log('I ran');
}

