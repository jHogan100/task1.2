const inputNumber = document.getElementById("inputNumber");
const outputArea = document.getElementById("outputArea");

inputNumber.addEventListener("input", function() {
   editNumber();
}); // edits number on screen as soon as you type with "input" event

function editNumber() {
    const numberN = parseFloat(inputNumber.value);
    const isNumberNaN = Number.isNaN(numberN);
    const numberNsquared = numberN ** 2;
    const numberNbyZero = numberN / 0;
    const numberNtimesPi = numberN * 3.141;
    const hexNumberN = numberN.toString(16);
 // all constants declared for our methods. I feel like i could've used var here.
    const outputHTML = 
    `<p> Is nan? : ${isNumberNaN}</p>
    <p> Squared: ${numberNsquared}</p>
    <p> Divided by Zero: ${numberNbyZero}</p>
    <p> Multiplied by pi: ${numberNtimesPi}</p>
    <p> Hexadecimal: ${hexNumberN}</p>`;
    outputArea.innerHTML = outputHTML;
}
