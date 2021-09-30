//Canvas size
const canvas_size = document.querySelector("#canvas_size")

function changeCanvasSize() {
    document.getElementById("draw").width = this.value;
    document.getElementById("draw").height = this.value;
};

canvas_size.addEventListener('change', changeCanvasSize);

// Canvas
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = document.querySelector('#canvas_size').value
canvas.height = document.querySelector('#canvas_size').value

let isDrawing = false;
let lastX = 0;
let lastY = 0;


function draw(e) {
    if(!isDrawing) return;
    ctx.strokeStyle = document.querySelector('#color').value;
    ctx.lineWidth = document.querySelector('#size').value;
    ctx.lineJoin = 'round';
ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX ,e.offsetY]
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX ,e.offsetY]
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

