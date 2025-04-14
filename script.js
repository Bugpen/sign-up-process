// File: script.js
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const agreed = document.getElementById('terms').checked;

  if (!firstName || !lastName || !email || !password || !agreed) {
    alert('Please fill out all fields and agree to the terms.');
    return;
  }

  // Store user info in localStorage (not recommended for sensitive data)
  const userData = {
    firstName,
    lastName,
    email,
    password // Just for demo – never store plain text passwords like this
  };

  localStorage.setItem('amuUser', JSON.stringify(userData));
  alert('Account created successfully!');

  // Redirect to your main website after signup
  window.location.href = 'https://bugpen.github.io/all-in-one/#';

  document.getElementById('signup-form').reset();
});