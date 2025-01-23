// Particle generation and animation
function getParticleCount() {
  const width = window.innerWidth;
  if (width < 768) return 30; // Phone
  if (width < 1024) return 60; // Tablet
  return 100; // Desktop
}
const particleCount = getParticleCount();
const minSpeed = 5; // Minimum animation duration
const maxSpeed = 20; // Maximum animation duration
const minSize = 12; // Minimum font size
const maxSize = 24; // Maximum font size

function getRandomNumber() {
  return Math.floor(Math.random() * 10); // Random digit 0-9
}

function createParticle() {
  const particle = document.createElement("div");
  particle.className = "matrix-particle";

  // Random position
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;

  // Random size and animation duration
  const size = Math.random() * (maxSize - minSize) + minSize;
  particle.style.fontSize = `${size}px`;
  particle.style.animationDuration = `${
    Math.random() * (maxSpeed - minSpeed) + minSpeed
  }s`;

  // Random delay
  particle.style.animationDelay = `-${Math.random() * 10}s`;

  // Create number cycling effect
  let currentNumber = getRandomNumber();
  particle.textContent = currentNumber;

  // Change number at random intervals
  setInterval(() => {
    particle.textContent = getRandomNumber();
  }, Math.random() * 100);

  return particle;
}

// Create particle container
const particleContainer = document.createElement("div");
particleContainer.style.position = "fixed";
particleContainer.style.top = "0";
particleContainer.style.left = "0";
particleContainer.style.width = "100vw";
particleContainer.style.height = "100vh";
particleContainer.style.pointerEvents = "none";
document.body.appendChild(particleContainer);

// Create initial particles
const responsiveCount = getParticleCount();
for (let i = 0; i < responsiveCount; i++) {
  const particle = createParticle();
  particleContainer.appendChild(particle);
}

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
