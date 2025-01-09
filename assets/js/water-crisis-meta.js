const resp = await fetch("https://maprva.github.io/2025-water-crisis/meta.json");
const { count, latest } = await resp.json();
const latestDate = new Date(latest);
document.getElementById("meta").textContent = `${count} responses as of ${latestDate}`;
