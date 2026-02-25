const canvas = document.getElementById('galaxy-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Partículas de la Galaxia (Verdes y Grises para fondo blanco)
let particles = [];
for(let i = 0; i < 200; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        color: Math.random() > 0.5 ? '#28a745' : '#cccccc',
        velocity: Math.random() * 0.5
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        p.y += p.velocity;
        if(p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(animate);
}
animate();

// SECUENCIA MAESTRA
setTimeout(() => {
    const bang = document.getElementById('big-bang');
    const interface = document.getElementById('interface');
    
    // Activa Big Bang
    bang.classList.add('bang-flash');
    
    setTimeout(() => {
        // Desaparece galaxia y aparece PROVEED
        canvas.style.display = 'none';
        interface.classList.remove('hidden');
    }, 400);
}, 3000); // 3 segundos de galaxia antes del estallido

function iniciar() {
    document.querySelector('.btn-primary').innerText = "CARGANDO...";
    setTimeout(() => { window.location.href = "dashboard.html"; }, 1000);
}
