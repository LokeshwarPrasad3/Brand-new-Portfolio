// confetti.js

let streamingConfetti = false;
let particles = [];
let animationFrameId;
const confettiCanvasId = 'confetti-canvas';

export function start() {
    if (!streamingConfetti) {
        createCanvas();
        streamingConfetti = true;
        requestAnimationFrame(runAnimation);
    }
}

export function stop() {
    streamingConfetti = false;
    clearCanvas();
    cancelAnimationFrame(animationFrameId); // Cancel any ongoing animations
}

function createCanvas() {
    let canvas = document.getElementById(confettiCanvasId);
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.setAttribute('id', confettiCanvasId);
        canvas.style.position = 'fixed';
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '9999';
        document.body.appendChild(canvas);
        const context = canvas.getContext('2d');
        resizeCanvas(canvas, context);
        window.addEventListener('resize', () => resizeCanvas(canvas, context));
    }
}

function resizeCanvas(canvas, context) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function clearCanvas() {
    const canvas = document.getElementById(confettiCanvasId);
    if (canvas) {
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        document.body.removeChild(canvas);
    }
}

function runAnimation() {
    if (!streamingConfetti) return;

    updateParticles(); // Update particles' positions and states
    drawParticles(); // Draw particles on the canvas

    animationFrameId = requestAnimationFrame(runAnimation);
}

function updateParticles() {
    const canvas = document.getElementById(confettiCanvasId);
    const context = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        particle.y += particle.speed; // Update position based on speed
        particle.x += particle.drift;

        if (particle.y > height) {
            // If the particle goes out of view, reset its position
            particles[i] = createParticle(width, height);
        }

        particle.rotation += particle.rotationSpeed; // Update rotation
    }
}

function drawParticles() {
    const canvas = document.getElementById(confettiCanvasId);
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        context.save();
        context.translate(particle.x, particle.y);
        context.rotate(particle.rotation);
        context.fillStyle = particle.color;
        context.fillRect(
            -particle.size / 2,
            -particle.size / 2,
            particle.size,
            particle.size
        );
        context.restore();
    }
}

function createParticle(width, height) {
    return {
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 10 + 5,
        color: getRandomColor(),
        speed: Math.random() * 3 + 1,
        drift: Math.random() * 2 - 1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: Math.random() * 0.02 - 0.01,
    };
}

function getRandomColor() {
    const colors = [
        'rgba(30,144,255,1)',
        'rgba(107,142,35,1)',
        'rgba(255,215,0,1)',
        'rgba(255,192,203,1)',
        'rgba(106,90,205,1)',
        'rgba(173,216,230,1)',
        'rgba(238,130,238,1)',
        'rgba(152,251,152,1)',
        'rgba(70,130,180,1)',
        'rgba(244,164,96,1)',
        'rgba(210,105,30,1)',
        'rgba(220,20,60,1)',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Initialize particles
for (let i = 0; i < 100; i++) {
    particles.push(createParticle(window.innerWidth, window.innerHeight));
}
