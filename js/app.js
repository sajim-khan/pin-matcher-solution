function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4){
        return pin;
    } else {
        console.log('pin 3 digit found', pin)
        return getPin();
    }
}


function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    //console.log(pin)
    
    const displayPinField = document.getElementById('display-pin')
    displayPinField.value = pin;
});

//calculator part (event delegate)
document.getElementById('calculator').addEventListener('click', function(event) {
    const typedNumberField = document.getElementById('typed-numbers');
    const number = event.target.innerText;
    const previousTypedNumber = typedNumberField.value;
    if (isNaN (number)) {
        if (number === 'C'){
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    } else {
        
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
    
})

document.getElementById('verify-pin').addEventListener('click', function() {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    
    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinErrorMessage = document.getElementById('pin-error');
    if (typedNumber === currentPin) {
        
        pinSuccessMessage.style.display = 'block';
        pinErrorMessage.style.display = 'none';
    }
    else {
    
        pinErrorMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})