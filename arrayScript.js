const stringArray = ["Boxer", "Poodle", "Husky", "Terrier"];
const numArray = [1, 2, 3, 5, 8, 13, 500.369];
const outputArea = document.getElementById("outputArea");

//function for checking if the number in the array is greater than 5
function checkLimit5(limit){
    return limit > 5;
}
//funtion checks and returns the highest number
function checkMax(array){
return Math.max(...array);
}

//function for editing the text/string array
function editArray() {
    const poppedArray = stringArray.pop();
    stringArray.push("Mastiv");
    const arrayToString = stringArray.toString(); // pops array first, then pushes mastiv
    const outputHTML = `<p>Popped element: ${poppedArray}</p>
                        <p> New Array: ${arrayToString}</p>`;
    outputArea.innerHTML = outputHTML;
}
//function for editing our number array
function editNumberArray() {
    const squaredArray = numArray.map(numArray => Math.pow(numArray, 2));
    const greaterThan5 = numArray.filter(checkLimit5); //calling filter with our function to set the limit.
    const largestNumber = checkMax(numArray);
    const outputHTML = `<p>squared array: ${squaredArray}</p>
                        <P> GREATER THAN 5?: ${greaterThan5}</p>
                        <p> which is  the highest?: ${largestNumber}`;
    outputArea.innerHTML = outputHTML;
}