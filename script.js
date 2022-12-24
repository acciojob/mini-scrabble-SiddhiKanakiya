//your code here
let inputText = document.getElementById("evaluatedText");
let resultLength = document.getElementById("letterCount");

inputText.addEventListener("keyup",stringLength);

function stringLength(){
    let s = inputText.value;
    let sLength = s.length;

    resultLength.innerText = sLength;
    
}
