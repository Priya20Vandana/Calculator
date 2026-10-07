function calculate(a,b,operator){
    if(operator === '+'){
        return a + b;
    }else if(operator === '-'){
        return a - b;
    }else if(operator === '*'){
        return a * b;
    }else if(operator === '/') {
        return a / b;
    }else {
        return "Invalid operator";
    }
}

document.getElementById("calculateBtn").addEventListener("click", function() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    let result = calculate(num1, num2, operator);

    document.getElementById("result").textContent = result;
});

