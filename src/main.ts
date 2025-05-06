import { Leaderboard } from './components/Leaderboard';
import { Market } from './components/Market';

function updateOnlineStatus() {
  const banner = document.getElementById('offline-banner');
  if (!banner) return;
  
  if (navigator.onLine) {
    banner.style.display = 'none';
  } else {
    banner.style.display = 'block';
  }
}

// Detect when user goes offline/online
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Set initial state
updateOnlineStatus();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
  navigator.serviceWorker.register('/service-worker.js');  });
}
// Simple router
const app = document.getElementById('app');

function render(route: string) {
  if (!app) return;
  if (route === 'market') {
    Market(app);
  } else {
    Leaderboard(app);
  }
}

// Init router
window.addEventListener('hashchange', () => render(location.hash.slice(1)));
render(location.hash.slice(1));
