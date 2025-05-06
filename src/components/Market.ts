import { fetchMarket } from '../api';

export async function Market(container: HTMLElement) {
  const data = await fetchMarket();
  container.innerHTML = `
    <h1>Market</h1>
    <ul>
      ${data.items.map((i: any) => `<li>${i.name} - ${i.cost}g<br><small>${i.description}</small></li>`).join('')}
    </ul>
    <a href="#">Go to Leaderboard</a>
  `;
}