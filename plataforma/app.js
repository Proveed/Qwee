const canvas = document.getElementById('galaxy-canvas');
const ctx = canvas.getContext('2d');
const bang = document.getElementById('big-bang');
const logo = document.getElementById('logo-probet');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Creación de estrellas
let stars = [];
for(let i = 0; i < 400; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8,
        speed: Math.random() * 0.4
    });
}

function animateGalaxy() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        s.y += s.speed;
        if(s.y > canvas.height) s.y = 0;
    });
    requestAnimationFrame(animateGalaxy);
}
animateGalaxy();

// SECUENCIA DE TIEMPOS
setTimeout(() => {
    // 1. Iniciamos la explosión
    bang.classList.add('animate-bang');
    
    setTimeout(() => {
        // 2. Quitamos estrellas y mostramos el logo de Probet
        canvas.style.transition = "opacity 1s";
        canvas.style.opacity = "0";
        logo.classList.remove('hidden');
        logo.classList.add('visible');
        
        // 3. Redirección al Dashboard tras ver el logo
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 5000);
    }, 900);
}, 3500); // 3.5 segundos contemplando la galaxia
