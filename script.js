// Crea particelle di sfondo
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (10 + Math.random() * 10) + 's';
    particlesContainer.appendChild(particle);
}

// Gestione scroll
const robot = document.getElementById('naoRobot');
const robotContainer = document.getElementById('robotContainer');
const scrollDots = document.querySelectorAll('.scroll-dot');

let lastScrollY = 0;
let scrollVelocity = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollY / maxScroll;
    
    // Calcola velocità scroll
    scrollVelocity = scrollY - lastScrollY;
    lastScrollY = scrollY;
    
    // Muovi il robot verticalmente in base allo scroll
    const verticalOffset = scrollPercent * 200 - 100;
    robotContainer.style.transform = `translateY(calc(-50% + ${verticalOffset}px))`;
    
    // Inclina il robot in base alla direzione dello scroll
    const tiltAngle = Math.min(Math.max(scrollVelocity * 0.5, -15), 15);
    robot.style.transform = `rotateX(${tiltAngle}deg)`;
    
    // Aggiorna indicatori scroll
    const sectionIndex = Math.floor(scrollPercent * 4);
    scrollDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === sectionIndex);
    });
});

// Effetto hover sul robot
robotContainer.addEventListener('mouseenter', () => {
    robot.style.animationPlayState = 'paused';
});

robotContainer.addEventListener('mouseleave', () => {
    robot.style.animationPlayState = 'running';
});