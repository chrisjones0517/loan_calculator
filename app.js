const loanAmount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const calcBtn = document.querySelector('.btn');
const monthlyPmt = document.querySelector('#monthly-payment');
const totalPmt = document.querySelector('#total-payment');
const totalInt = document.querySelector('#total-interest');
const loader = document.querySelector('#loading');
const compounding = document.querySelectorAll('.form-check-input');

loader.style.display = 'none';
calcBtn.addEventListener('click', () => {
    loader.style.display = 'block';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);
    calculate(loanAmount, interest, years, compounding);
});

function calculate(principal, interest, term, formula) {
    let p = principal.value;
    let y = years.value;
    let i = interest.value / 100;
    let total0 = p * Math.pow((Math.E), i * y);
    let total1 = p * Math.pow((1 + (i / 12)), 12 * y);
    let total2 = p * Math.pow((1 + (i / 4)), 4 * y);
    let total3 = p * Math.pow((1 + i), y);
            
    if (compounding[0].checked) {
        totalPmt.value = total0.toFixed(2);
        monthlyPmt.value = (total0 / y / 12).toFixed(2);
        totalInt.value = (total0 - p).toFixed(2); 
                
    } else if (compounding[1].checked) {
        totalPmt.value = total1.toFixed(2);
        monthlyPmt.value = (total1 / y / 12).toFixed(2);
        totalInt.value = (total1 - p).toFixed(2); 
        
    } else if (compounding[2].checked) {
        totalPmt.value = total2.toFixed(2);
        monthlyPmt.value = (total2 / y / 12).toFixed(2);
        totalInt.value = (total2 - p).toFixed(2); 
        
    } else if (compounding[3].checked) {
        totalPmt.value = total3.toFixed(2);
        monthlyPmt.value = (total3 / y / 12).toFixed(2);
        totalInt.value = (total3 - p).toFixed(2); 
        
    } else {
        alert('You must choose a compounding interval!');
    }
}