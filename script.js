function pad(num) {
  return num.toString().padStart(2, '0');
}

function getDayProgress(hour, minute, second) {
  const totalSeconds = hour * 3600 + minute * 60 + second;
  return ((totalSeconds / 86400) * 100).toFixed(2);
}

function updateClock() {
  const now = new Date();
  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);
  const day = pad(now.getDate());
  const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const progress = getDayProgress(hour, minute, second);

  const codeBlock = document.getElementById('codeBlock');
  codeBlock.innerHTML = `
<span class="keyword">const</span> <span class="variable">currentTime</span> = {
  <span class="key">year</span>: <span class="number">${year}</span>,
  <span class="key">month</span>: <span class="number">${month}</span>,
  <span class="key">day</span>: <span class="number">${day}</span>,
  <span class="key">dayOfWeek</span>: <span class="string">"${dayOfWeek}"</span>,
  <span class="key">hour</span>: <span class="number">${hour}</span>,
  <span class="key">minute</span>: <span class="number">${minute}</span>,
  <span class="key">second</span>: <span class="number">${second}</span>,
  <span class="key">dayProgress</span>: <span class="percent">${progress}%</span>
};`;

  // Update clock hands
  const hourHand = document.getElementById("hourHand");
  const minuteHand = document.getElementById("minuteHand");

  const hourDeg = ((hour % 12) + minute / 60) * 30;
  const minuteDeg = minute * 6;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
}

// Initial call and auto-refresh every second
updateClock();
setInterval(updateClock, 1000);

const toggleCheckbox = document.querySelector('.switch input');
const modeIcon = document.getElementById('mode-icon');

toggleCheckbox.addEventListener('change', () => {
  if(toggleCheckbox.checked) {
    document.body.classList.add('light');
    
  } else {
    document.body.classList.remove('light');
    
  }
});

