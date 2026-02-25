window.onload = () => {
    const contenedor = document.getElementById('contenedor-pelotitas');
    const logo = document.getElementById('logo-maestro');
    const login = document.getElementById('login-seccion');

    // 1. Caída de pelotitas
    for(let i=0; i<35; i++) {
        setTimeout(() => {
            const p = document.createElement('div');
            p.className = 'pelota-verde';
            p.style.left = (Math.random() * 90 + 5) + '%';
            contenedor.appendChild(p);
            setTimeout(() => { p.style.top = (window.innerHeight/2 + (Math.random()*40 - 20)) + 'px'; }, 50);
        }, i * 60);
    }

    // 2. Cae el Logo PROVEED y esparce las demás
    setTimeout(() => {
        logo.classList.remove('oculto');
        logo.classList.add('visible');
        logo.style.transform = 'scale(1.5)'; // Se hace grande al caer

        const pelotitas = document.querySelectorAll('.pelota-verde');
        pelotitas.forEach(p => {
            p.style.setProperty('--mx', (Math.random() - 0.5) * 1200 + 'px');
            p.style.setProperty('--my', (Math.random() - 0.5) * 1200 + 'px');
            p.classList.add('esparcir');
        });

        setTimeout(() => {
            logo.style.transform = 'scale(1)'; // Vuelve a su tamaño normal
            login.classList.remove('oculto');
            login.classList.add('visible');
        }, 500);
    }, 2800);
};
