const btn = document.querySelector('button');
btn.addEventListener('click', ()=> {

    // read the input
    const input1 = document.getElementById('first');
    const num1 = Number(input1.value);
    const input2 = document.getElementById('second');
    const num2 = Number(input2.value);
    // the data which comes is in string , so we have to convert it in number
    
    if(isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    // output the sum
    const result = num1 + num2;
    const output = document.getElementById('result');
    output.textContent = `Result: ${result}`;
})



// BMI Calculator
// Dahej Calculator
// Alimony Calculator