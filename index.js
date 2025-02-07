
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
