const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const ctx = canvas.getContext("2d");


let size = 20;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

// let x =50;
// let y =50;
canvas.addEventListener('mousedown',() =>{
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});
canvas.addEventListener('mouseup',() =>{
    isPressed = false 
    x = undefined;
    y = undefined;
});
canvas.addEventListener('mousemove',(e) =>{
    if(isPressed){
        const x = e.offsetX;
        const y = e.offsetY;
    
        drawCircle(x,y);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
   

});
//mousedown- noqte seklinde edir 
//mousemove - hereket etdirir

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x , y ,size,0, Math.PI * 2 );
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
};
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    // ctx.lineWidth = size * 2;
    ctx.stroke();
};

increaseBtn.addEventListener('click', () => {
    size += 5;
    if(size >= 50){
        size = 50;
    }
});
decreaseBtn.addEventListener('click' , () => {
    size -= 5;
    if(size <= 5){
        size = 5;
    }
    
    updateSizeOnScreen();
});

colorEl.addEventListener('change', (e) =>{
    color = e.target.value;
});
clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function updateSizeOnScreen(){
    sizeEl.innerHTML = size;
}



//ANIMATION
// function draw() {
//     ctx.clearRect(0,0,canvas.width , canvas.height);
//     drawCircle(x++,y);
//     requestAnimationFrame(draw);
// }
// draw();