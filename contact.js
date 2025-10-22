document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let valid = true;
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  const success = document.getElementById('success-message');

  // Reset messages
  document.querySelectorAll("span[id^='error-']").forEach(span => span.textContent = '');

  if (!name.value.trim()) {
    document.getElementById("error-name").textContent = 'Please enter your name.';
    valid = false;
  }

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
    document.getElementById("error-email").textContent = 'Please enter a valid email address.';
    valid = false;
  }

  if (!subject.value.trim()) {
    document.getElementById("error-subject").textContent = 'Subject is required.';
    valid = false;
  }

  if (message.value.trim().length < 10) {
    document.getElementById("error-message").textContent = 'Message must be at least 10 characters long.';
    valid = false;
  }

  if (valid) {
    success.hidden = false;
    event.target.reset();
    setTimeout(() => (success.hidden = true), 3000);
  }
});
