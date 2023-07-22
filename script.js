const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.style.visibility = "hidden";
editor.value = localStorage.runnercode_text;

if ( localStorage.runnercode_new !== "false" ) {
    localStorage.runnercode_text = "";
    localStorage.runnercode_new = "false";
}


function deleteCanvas() {
    canvas.style.visibility = "hidden";
}

function createCanvas(width, height) {
    canvas.style.visibility = "visible";
    canvas.height = height;
    canvas.width = width;
}

window.onbeforeunload = closingCode;
function closingCode(){
    localStorage.runnercode_text = editor.value;
   return null;
}