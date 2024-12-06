const checkbox = document.getElementById('divStyle')

const textfield = document.querySelectorAll('.textfield')

const button = document.getElementById('button')

const divBox = document.getElementById('output')

function waitingForClick(callback){
    callback();
}

function handleClick(e){
    console.log('Någon klickade på knappen. Parameter: ' , e)
}
waitingForClick(() => handleClick)

const textField = document.querySelector('.textfield')
textField.addEventListener('click', handleClick)