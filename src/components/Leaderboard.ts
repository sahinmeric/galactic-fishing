import { fetchLeaderboard } from '../api';

export async function Leaderboard(container: HTMLElement) {
  const data = await fetchLeaderboard();
  container.innerHTML = `
    <h1>Leaderboard</h1>
    <ul>
      ${data.players.map((p: any) => `<li>#${p.rank} - ${p.username} (Lvl ${p.level}, ${p.gold}g)</li>`).join('')}
    </ul>
    <a href="#market">Go to Market</a>
  `;
}