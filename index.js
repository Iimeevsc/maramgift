function createMagicParticles() {
  const particleCount = 30;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'magic-particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 8}s`; // Increased delay range
    document.body.appendChild(particle);
  }
}
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
// Add click handler for Gryffindor section
document.querySelector('.gryffindor').addEventListener('click', () => {
  window.location.href = 'gryffindor.html'; // Navigate to gryffindor.html
});
