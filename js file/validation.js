document.getElementById('contact').addEventListener('submit', (event) => {
    const email = document.getElementById('email').value;
    if (email !== email.toLowerCase()) {
      event.preventDefault();
    }
  });
  