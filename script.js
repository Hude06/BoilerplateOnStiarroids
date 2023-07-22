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
document.getElementById("export").addEventListener("click", function() {
    log("Hello")
        const htmlContent = editor.value;
        const fileName = 'game.js';

        // Create a Blob with the HTML content
        const blob = new Blob([htmlContent], { type: 'text/html' });

        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create an anchor element with download attribute and click it
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();

        // Release the URL object
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