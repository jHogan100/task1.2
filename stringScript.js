const inputText = document.getElementById("inputText");
const outputArea = document.getElementById("outputArea");

inputText.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        editString();
}
}); // calls our function with the enter key. i could've used "input" but I wanted something different.

function editString() {
    const text = inputText.value;
    const LCText = text.toLowerCase();
    const rAndUText = text.split("").reverse().join("").toUpperCase();
//constants declared and methods applied.
    const outputHTML =  
    `<p>Lowercase: ${LCText}</p>
    <p>Uppercase and reversed: ${rAndUText}</p>`;
    outputArea.innerHTML = outputHTML;
}