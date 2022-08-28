const calculateBtn = document.querySelector('.calculate');
const resetBtn = document.querySelector('.reset');

calculateBtn.addEventListener('click' , (e) => {
    let bill = document.getElementById('amount').value;
    let percentage = document.getElementById('discount').value;
    let discountAmt = document.getElementById('discount-amount');
    let finalPay = document.getElementById('pay');


    discountAmt.value = bill * percentage/100;
    finalPay.value = bill - discountAmt;
})