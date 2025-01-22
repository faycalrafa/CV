// Particle generation and animation
const particleTypes = ["circle", "bracket", "triangle"];
const particleCount = 30;

function createParticle() {
  const particle = document.createElement("div");
  particle.className = `particle ${
    particleTypes[Math.floor(Math.random() * particleTypes.length)]
  }`;

  // Random position
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;

  // Random size and animation duration
  const size = Math.random() * 30 + 10;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.animationDuration = `${Math.random() * 10 + 5}s`;

  // Random delay
  particle.style.animationDelay = `-${Math.random() * 10}s`;

  return particle;
}

// Create particle container
const particleContainer = document.createElement("div");
particleContainer.style.position = "absolute";
particleContainer.style.top = "0";
particleContainer.style.left = "0";
particleContainer.style.width = "100%";
particleContainer.style.height = document.documentElement.scrollHeight + "px";
particleContainer.style.pointerEvents = "none";
document.body.appendChild(particleContainer);

// Update container height on resize or content changes
const resizeObserver = new ResizeObserver((entries) => {
  particleContainer.style.height = document.documentElement.scrollHeight + "px";
});
resizeObserver.observe(document.body);

// Create initial particles
for (let i = 0; i < particleCount; i++) {
  const particle = createParticle();
  particleContainer.appendChild(particle);
}

// Scroll-based particle generation
let lastScrollY = window.scrollY;
let lastParticleTime = 0;
const scrollThreshold = 100; // pixels
const viewportHeight = window.innerHeight;
const maxParticles = 50; // Maximum particles on screen
const particleCooldown = 20; // Milliseconds between particle generation

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const scrollDelta = scrollY - lastScrollY;
  const currentParticles =
    particleContainer.querySelectorAll(".particle").length;

  // Only generate particles when:
  // 1. Near viewport edges (top or bottom)
  // 2. Below max particle count
  // 3. Cooldown period has passed
  const nearBottom =
    scrollY + viewportHeight >=
    document.documentElement.scrollHeight - scrollThreshold;
  const nearTop = scrollY <= scrollThreshold;

  if (
    (nearBottom || nearTop) &&
    currentParticles < maxParticles &&
    Date.now() - lastParticleTime > particleCooldown
  ) {
    const newParticle = createParticle();
    // Position new particle in the visible area
    newParticle.style.top = `${
      scrollY + viewportHeight - Math.random() * 200
    }px`;
    particleContainer.appendChild(newParticle);
    lastParticleTime = Date.now();
  }

  lastScrollY = scrollY;
});

// Cleanup particles that move out of view
setInterval(() => {
  const particles = particleContainer.querySelectorAll(".particle");
  particles.forEach((particle) => {
    const rect = particle.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > viewportHeight) {
      particle.remove();
    }
  });
}, 5000);

// Mouse following light trail
const trail = document.createElement("div");
trail.className = "light-trail";
document.body.appendChild(trail);

document.addEventListener("mousemove", (e) => {
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;
});

// Contact form submission handler
const contactForm = document.querySelector(".contact-form");
const submitBtn = document.querySelector(".submit-btn");

if (contactForm && submitBtn) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Create particles
    const particles = submitBtn.querySelector(".particles");
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
      particle.style.setProperty("--y", `${Math.random() * 200 - 100}px`);
      particles.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 600);
    }

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I will get back to you soon.");
      contactForm.reset();
    }, 1000);
  });
}
