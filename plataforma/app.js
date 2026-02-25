const canvas = document.getElementById('galaxy-canvas');
const ctx = canvas.getContext('2d');
const bang = document.getElementById('big-bang');
const authContainer = document.getElementById('auth-container');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for(let i = 0; i < 300; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        speed: Math.random() * 0.5
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(s => {
        ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2); ctx.fill();
        s.y += s.speed; if(s.y > canvas.height) s.y = 0;
    });
    requestAnimationFrame(draw);
}
draw();

// SECUENCIA PROVEED
setTimeout(() => {
    bang.classList.add('animate-bang');
    setTimeout(() => {
        canvas.style.opacity = "0";
        authContainer.classList.remove('hidden');
        authContainer.classList.add('visible');
    }, 1100);
}, 3000);

document.getElementById('auth-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('btn-text').innerText = "CONECTANDO...";
    setTimeout(() => { window.location.href = "dashboard.html"; }, 1500);
});

document.getElementById('toggle-auth').onclick = () => {
    const title = document.getElementById('auth-title');
    title.innerText = title.innerText === "Iniciar Sesión" ? "Crear Cuenta" : "Iniciar Sesión";
};
