const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.style.visibility = "hidden";
function log(d) {
    return(d)
}
editor.value = localStorage.runnercode_text;
if ( localStorage.runnercode_new !== "false" ) {
    localStorage.runnercode_text = "";
    localStorage.runnercode_new = "false";
}

function log(d) {
    return(d)
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