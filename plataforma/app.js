const canvas = document.getElementById('galaxy-canvas');
const ctx = canvas.getContext('2d');
const bang = document.getElementById('big-bang');
const auth = document.getElementById('auth-container');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "white";
    for(let i=0; i<100; i++) {
        ctx.beginPath();
        ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, 1, 0, Math.PI*2);
        ctx.fill();
    }
}
draw();

setTimeout(() => {
    bang.classList.add('animate-bang');
    setTimeout(() => {
        canvas.style.display = 'none';
        auth.classList.remove('hidden');
        auth.classList.add('visible');
    }, 1200);
}, 2000);
