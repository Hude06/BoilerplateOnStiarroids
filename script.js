const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.style.visibility = "hidden";
let red = "255,0,0"
function log(d) {
    console.log(d)
    return(d)
}
function fillRect(x,y,w,h) {
    ctx.fillRect(x,y,w,h);
}

function fillBounds(name) {
    ctx.fillRect(name.bounds.x, name.bounds.y, name.bounds.w, name.bounds.h);
}
editor.value = localStorage.runnercode_text;
if ( localStorage.runnercode_new !== "false" ) {
    localStorage.runnercode_text = "";
    localStorage.runnercode_new = "false";
}

function log(d) {
    return(d);
}

function deleteCanvas() {
    canvas.style.visibility = "hidden";
}

function createCanvas(width, height) {
    canvas.style.visibility = "visible";
    canvas.height = height;
    canvas.width = width;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("keydown", function (event) {
    currentKey.set(event.key, true);
    keydown = true;
});

window.addEventListener("keyup", function (event) {
    currentKey.set(event.key, false);
    keydown = false;
});

saveButton.addEventListener("click", function(){
    localStorage.runnercode_text = editor.value;
});