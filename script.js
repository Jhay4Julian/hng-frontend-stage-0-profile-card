const timeSpan = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  timeSpan.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);
