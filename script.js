const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.style.visibility = "hidden";
let red = "255,0,0"
function log(d) {
    console.log(d)
    return(d)
}
function fillRect(x,y,w,h) {
    ctx.fillRect(x,y,w,h)
}
editor.value = localStorage.runnercode_text;
if ( localStorage.runnercode_new !== "false" ) {
    localStorage.runnercode_text = "";
    localStorage.runnercode_new = "false";
}
document.getElementById("export").addEventListener("click", function() {
        const htmlContent = editor.value;
        const fileName = 'game.js';
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
}); 
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