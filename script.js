/* Zacharias Andersson & Patrik Peterson
 Grupp 6 Labboration 1
 Kurs GIK339 */
 
// Uppgift 4
// Hämta elementen
const checkbox = document.getElementById('divStyle');
const button = document.getElementById('button');
const output = document.getElementById('output');
const inputFields = document.querySelectorAll('.textfield');
const colorInput = document.getElementById('color'); // Input-fältet för färg


//Uppgift 5
// Funktion för att hantera klick i textfält
function handleClick(e) {
  const targetName = e.target.id;
  console.log(`Fält med ID ${targetName} klickades.`);
  console.log("handleClick, eventobj: ", e.target);
}
   
// Funktion för att hantera blur-event och skriva ut hela strängen
function handleBlur(e) {
  const name = e.target.name;
  const value = e.target.value;
    if(e.target.name == 'content'){
  // Lägg hela strängen till output-diven
  const html = `<p>Fältet ${name} har värdet ${value}</p>`;
  output.insertAdjacentHTML('afterbegin', html);
  console.log(`Fält ${name} har värdet: ${value}`);
    }
}

//Uppgift 6
// Koppla eventlyssnare för textfälten
inputFields.forEach((field) => {
    field.addEventListener('click', handleClick);
    field.addEventListener('blur', handleBlur); // Ändra till 'blur' istället för 'input'
  });

//Uppgift 6
// Koppla eventlyssnare för checkboxen
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    // Hämta färg från input-fältet och uppdatera output-divens bakgrundsfärg
    const selectedColor = colorInput.value;
    output.style.backgroundColor = selectedColor;
    console.log('Checkbox markerad: Bakgrundsfärgen ändrades till:', selectedColor);
  } else {
    // Återställ bakgrundsfärgen om checkboxen avmarkeras
    output.style.backgroundColor = '';
    console.log('Checkbox avmarkerad: Bakgrundsfärgen återställd.');
  }
});

//Uppgift 6
// Koppla eventlyssnare för knappen
button.addEventListener('click', () => {
  
    // Rensa innehållet i div-elementet
    output.remove();
  
    // Rensa innehållet i alla textfält
    inputFields.forEach((field) => {
      field.value = ''; // Sätt värdet till en tom sträng
    });
  
    console.log('Innehållet i output har rensats och textfälten är tömda.');
  });
