// ---------------generate pin

function generatePin(){
    // 4 digits pin
    const pin = Math.round(Math.random()*10000)

    const pinText = pin + ''
    
    if (pinText.length == 4) {
        
        return pin
    }
    else {
        return generatePin()
    }
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pinField = document.getElementById('pin-field')
    pinField.value = generatePin() 
})



// ---------------keys handling

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText
    const calcField = document.getElementById('calc-field')
    if (isNaN(number)){
        if(number == 'C'){
            calcField.value = ''
        }
        else if(number == '<'){
            calcField.value = ''
        }
    }
    else{
        const previousNumber = calcField.value
        const newNumber =  previousNumber + number 
        calcField.value = newNumber
    } 
})


// -----------------------varification



function varifyNumber(){
    const generateField = document.getElementById('pin-field').value
    const typedField = document.getElementById('calc-field').value
    const notifyFail = document.getElementById('notify-fail')
    const notifySuccess = document.getElementById('notify-success')
    console.log(generateField)
    console.log(typedField)
    if (generateField == typedField){
        notifySuccess.style.display = 'block'
        notifyFail.style.display = 'none'
        document.getElementById('pin-field').value= ''
        document.getElementById('calc-field').value= ''
    }
    else if(generateField != typedField){
        notifySuccess.style.display = 'none'
        notifyFail.style.display = 'block'
        document.getElementById('pin-field').value= ''
        document.getElementById('calc-field').value= ''
    }
   
}