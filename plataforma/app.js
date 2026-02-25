window.onload = function() {
    const contenedor = document.getElementById('contenedor-pelotitas');
    const maestro = document.getElementById('bloque-maestro');
    const login = document.getElementById('login-seccion');
    const totalPelotitas = 25; // Cantidad ideal para móvil

    // 1. Caída secuencial de pelotitas verdes
    for (let i = 0; i < totalPelotitas; i++) {
        setTimeout(() => {
            const p = document.createElement('div');
            p.className = 'pelotita';
            p.style.left = (Math.random() * 80 + 10) + '%';
            contenedor.appendChild(p);
            
            // Caen al centro de la pantalla
            setTimeout(() => {
                p.style.top = (window.innerHeight / 2 + (Math.random() * 60 - 30)) + 'px';
            }, 50);
        }, i * 120);
    }

    // 2. Caída del logo PROVEED e impacto
    setTimeout(() => {
        maestro.classList.remove('oculto');
        maestro.classList.add('visible');
        maestro.style.top = '-150px';
        
        // El logo cae al centro
        setTimeout(() => {
            maestro.style.top = '30%';
            
            // 3. Efecto de esparcir las pelotitas
            setTimeout(() => {
                const todas = document.querySelectorAll('.pelotita');
                todas.forEach(pelota => {
                    const randomX = (Math.random() - 0.5) * 800;
                    const randomY = (Math.random() - 0.5) * 800;
                    pelota.style.setProperty('--x', randomX + 'px');
                    pelota.style.setProperty('--y', randomY + 'px');
                    pelota.classList.add('esparcir');
                });
                
                // 4. Mostrar el login finalmente
                login.classList.remove('oculto');
                login.classList.add('visible');
            }, 500);
        }, 50);
    }, (totalPelotitas * 120) + 500);
};
