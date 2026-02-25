window.onload = function() {
    const contenedor = document.getElementById('contenedor-particulas');
    const maestra = document.getElementById('pieza-maestra');
    const login = document.getElementById('login-final');
    const cantidad = 30; // Pelotitas base

    // 1. Caída de pelotitas pequeñas
    for (let i = 0; i < cantidad; i++) {
        setTimeout(() => {
            const p = document.createElement('div');
            p.className = 'pelotita';
            p.style.left = (Math.random() * 80 + 10) + '%';
            contenedor.appendChild(p);
            
            // Animación de caída al suelo (suelo = centro de pantalla)
            setTimeout(() => {
                p.style.top = (window.innerHeight / 2 + (Math.random() * 50 - 25)) + 'px';
            }, 50);
        }, i * 100);
    }

    // 2. Cae la pieza maestra de PROVEED
    setTimeout(() => {
        maestra.classList.remove('hidden');
        maestra.style.position = 'absolute';
        maestra.style.top = '-200px';
        maestra.style.opacity = '1';
        
        setTimeout(() => {
            maestra.style.top = '40%'; // Cae al centro
            
            // 3. Al impactar, esparcir las pequeñas
            setTimeout(() => {
                const pelotitas = document.querySelectorAll('.pelotita');
                pelotitas.forEach(p => {
                    const x = (Math.random() - 0.5) * 1000;
                    const y = (Math.random() - 0.5) * 1000;
                    p.style.setProperty('--x', x + 'px');
                    p.style.setProperty('--y', y + 'px');
                    p.classList.add('esparcir');
                });
                
                // 4. Mostrar Login
                login.classList.remove('hidden');
            }, 600);
        }, 100);
    }, cantidad * 100 + 500);
};
