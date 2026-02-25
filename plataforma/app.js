const canvas = document.getElementById('galaxy');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let angle = 0;

// Crear 500 partículas para la galaxia
for (let i = 0; i < 500; i++) {
    particles.push({
        dist: Math.random() * (canvas.width / 2),
        angle: Math.random() * Math.PI * 2,
        size: Math.random() * 3,
        speed: 0.01 + Math.random() * 0.02
    });
}

function rotateGalaxy() {
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)"; // Efecto estela
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.angle += p.speed; // Esto obliga a las estrellas a rotar
        const x = canvas.width / 2 + Math.cos(p.angle) * p.dist;
        const y = canvas.height / 2 + Math.sin(p.angle) * p.dist;

        ctx.fillStyle = "#28a745"; // Color verde PROVEED
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(rotateGalaxy);
}

// Iniciar rotación
rotateGalaxy();

// SECUENCIA DE TIEMPO EXACTA
setTimeout(() => {
    const explosion = document.getElementById('explosion');
    const interface = document.getElementById('app-interface');
    
    // 1. Ejecutar Big Bang
    explosion.classList.add('animate-explosion');
    
    // 2. Cambiar a Login a mitad de la explosión (0.35s)
    setTimeout(() => {
        canvas.style.display = 'none';
        interface.classList.remove('hidden');
    }, 350);
}, 3000); // 3 segundos de galaxia girando
