canvas =document.getElementById("Mycanvas");
ctx =canvas.getContext("2d");
color = "blue"
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =2;
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke();

canvas.addEventListener("mousedown",presionarbotonmous);

function presionarbotonmous(e) {
    color =document.getElementById("color").value;
    x =e.clientX-canvas.offsetLeft;
    y =e.clientY-canvas.offsetTop;
    

    circulo(x,y);
}

function circulo(x,y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth =2;
    ctx.arc(x,y,40,0,2*Math.PI)
    ctx.stroke();

}

function limpiar() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}