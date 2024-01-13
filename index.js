document.getElementById('calculator').addEventListener('click', function (event) {
    const calculatorBtn = event.target.innerText;
    const displayField = document.getElementById('display').value;

    if (calculatorBtn === "C") {
        document.getElementById('display').value = "";
    }
    else if (calculatorBtn === '<') {
        document.getElementById('display').value = displayField.slice(0, displayField.length - 1);
    }
    else if (calculatorBtn === '=') {
        document.getElementById('display').value = eval(displayField);
    }
    else {
        document.getElementById('display').value = displayField + calculatorBtn;
    }
});