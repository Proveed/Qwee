const canvas = document.getElementById('galaxy');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for(let i=0; i<400; i++) {
    stars.push({
        angle: Math.random() * Math.PI * 2,
        dist: Math.random() * (canvas.width / 1.5),
        speed: 0.01 + Math.random() * 0.02,
        size: Math.random() * 3
    });
}

function draw() {
    ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    
    stars.forEach(s => {
        s.angle += s.speed;
        const x = canvas.width/2 + Math.cos(s.angle) * s.dist;
        const y = canvas.height/2 + Math.sin(s.angle) * s.dist;
        ctx.fillStyle = "#28a745";
        ctx.beginPath();
        ctx.arc(x, y, s.size, 0, Math.PI*2);
        ctx.fill();
    });
    requestAnimationFrame(draw);
}
draw();

// SECUENCIA: A los 4 segundos explota y queda el Login
setTimeout(() => {
    document.getElementById('big-bang').classList.add('flash-bang');
    
    setTimeout(() => {
        document.getElementById('intro-wrapper').classList.add('hidden');
        document.getElementById('login-interface').classList.remove('hidden');
    }, 400);
}, 4000);
