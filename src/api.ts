export async function fetchLeaderboard() {
  try {
    const res = await fetch('https://api-game.bloque.app/game/leaderboard');
    return await res.json();
  } catch (err) {
    console.error('[Offline] Leaderboard fetch failed:', err);
    return { players: [] }; // fallback
  }
}

export async function fetchMarket() {
  try {
    const res = await fetch('https://api-game.bloque.app/game/market');
    return await res.json();
  } catch (err) {
    console.error('[Offline] Market fetch failed:', err);
    return { items: [] }; // fallback
  }
}
