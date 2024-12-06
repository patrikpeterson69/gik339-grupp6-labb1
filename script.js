//////////////////////////////////////////////////////
// Labb 1 Zacharias Andersson Patrik Peterson ////////
//Första delen här är egentligen test av consolen bara
function functionDec(){
    console.log('functionDec');
}

const functionExp = (x) =>{
    console.log('functionExp, parameter: ', x)
};

functionExp(functionDec);

function functionTakeOtherFunction(x){
    console.log('functionTakeOtherFunction, parameter', x)
    x();
}
functionTakeOtherFunction(functionDec);
//////////////////////////////////////////////////////

// Skapar variabler för alla ID's
const checkbox = document.getElementById ('divStyle');
const content = document.getElementById ('content');
const color = document.getElementById ('color');
const button = document.getElementById('button');
const output = document.getElementById('output');
const inputFields = document.querySelectorAll('.textfield');

// Callback funktion
function inputWaitingFunction(callback){
    console.log('Väntar på input och kommer spara för callback: ', callback);
    callback();
}

// For loop för fälten med handle click funktion inbyggt
for (let i = 0; i < inputFields.length; i++){
    inputFields[i].addEventListener('click', handleClick);
}

// Hantera click funktion
function handleClick (e){
    e.preventDefault();
    console.log('Någon har tryck på parametern', e.target.id);
}

// Skapar en eventlistener för input/button
button.addEventListener('click', function(e) {
    console.log('Någon har klickat på ', e.target.id);
    output.remove();
});

// Skapar en eventlistener för Checkbox
checkbox.addEventListener('change', function(e) {
    console.log('Någon har klickat på boxen', checkbox.checked);
}); 

// Check och ändrar värdet i div
function checkContent(e){
     const name = e.target.name;
     const value =e.target.value; 
     if (e.target.name === 'content'){
        output.innerHTML = '<p>Fältet ' + name + ' har värdet: ' + value + '</p>'; 
     }
     
}

// Tittar så de giltigt färg som skrivits in
function validColor(color){
    const style = new Option().style;
    style.color = color;
    return style.color !== ''; // True/false oklart om de fanns någon boolean func.
}

// Ändra färg
function changeColor(e){
    const color = e.target.value;
    if (validColor(color)){
        output.style.backgroundColor = color;
    } 
}

/* Tittar om boxen är ifyld eller inte
function boxCheck(){
    const isChecked = checkbox.checked;
    return isChecked;
} */

// forEach loop med en check inbyggt som anonym funktion
inputFields.forEach((field)=> {
    field.addEventListener('input', (e)=>{
        checkContent(e);
        if (field.name === 'color' && (function() { return checkbox.checked; })()) {
            changeColor(e);
        } else if (field.name === 'color') {
            console.log('Boxen är inte ifylld');
        }
    });
});


