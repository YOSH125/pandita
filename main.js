// Función para crear estrellas aleatorias
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Función para crear partículas mágicas
function createMagicParticles() {
    const particlesContainer = document.querySelector('.magic-particles');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Función para crear luces ambientales
function createAmbientLights() {
    const ambientContainer = document.querySelector('.ambient-lights');
    const lightCount = 30;
    
    for (let i = 0; i < lightCount; i++) {
        const light = document.createElement('div');
        light.className = 'ambient-light';
        light.style.left = Math.random() * 100 + '%';
        light.style.top = Math.random() * 100 + '%';
        light.style.animationDelay = Math.random() * 8 + 's';
        light.style.animationDuration = (Math.random() * 4 + 6) + 's';
        
        // Colores aleatorios para las luces
        const colors = ['#fff700', '#e91e63', '#3f51b5', '#00bcd4', '#4caf50'];
        light.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        ambientContainer.appendChild(light);
    }
}

// Efecto de sonido (opcional - comentado para evitar problemas de autoplay)
function playMagicalSound() {
    // Aquí podrías agregar efectos de sonido
    // const audio = new Audio('magical-sound.mp3');
    // audio.play().catch(e => console.log('Audio no pudo reproducirse'));
}

// Inicialización mejorada
function initMagicalGarden() {
    // Crear elementos dinámicos
    createStars();
    createMagicParticles();
    createAmbientLights();
    
    // Pequeño delay para efecto dramático
    setTimeout(() => {
        document.body.classList.remove("container");
        playMagicalSound();
        
        // Agregar mensaje personalizado para Lucy
        setTimeout(() => {
            console.log("🌸 ¡Flores mágicas para Lucy! 💖");
            console.log("✨ Que cada pétalo te recuerde lo especial que eres ✨");
            console.log("🐶 ¡Y Snoopy también te manda amor! 💕");
        }, 2000);
    }, 500);
}

// Evento de carga
window.addEventListener('load', initMagicalGarden);

// Efectos adicionales al hacer clic
document.addEventListener('click', (e) => {
    // Crear efecto de click mágico
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.width = '10px';
    sparkle.style.height = '10px';
    sparkle.style.background = 'radial-gradient(circle, #fff700, transparent)';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.animation = 'magical-click 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
});

// Añadir keyframes para el efecto de click
const style = document.createElement('style');
style.textContent = `
    @keyframes magical-click {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Función especial para detectar dispositivo móvil
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Optimizaciones para móvil
if (isMobile()) {
    console.log("📱 Versión optimizada para móvil activada para Lucy! 💕");
    
    // Reducir partículas en móvil para mejor rendimiento
    document.addEventListener('DOMContentLoaded', () => {
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            if (index > 10) { // Reducir a 10 partículas en móvil
                particle.remove();
            }
        });
    });
}