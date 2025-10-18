const timeSpan = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  const now = new Date();
  timeSpan.textContent = now.toLocaleTimeString();
}

updateTime();
setInterval(updateTime, 1000);
