let communities = [];
let map;
let markers = [];

const LINK_LABELS = {
  telegram: 'Telegram',
  website: 'Сайт',
  instagram: 'Instagram',
  twitter: 'Twitter',
  facebook: 'Facebook',
  youtube: 'YouTube',
  email: 'Email'
};

async function init() {
  const resp = await fetch('data/communities.json');
  communities = await resp.json();

  document.getElementById('stat-total').textContent = communities.length;
  document.getElementById('stat-countries').textContent = new Set(communities.map(c => c.country)).size;

  initMap();
  initTable();
  initTabs();
}

function initMap() {
  map = L.map('map').setView([48, 20], 4);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const redIcon = L.divIcon({
    className: 'custom-marker',
    html: `<svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 24 12 24s12-15 12-24c0-6.627-5.373-12-12-12z" fill="#e23636"/>
      <circle cx="12" cy="12" r="5" fill="#fff"/>
    </svg>`,
    iconSize: [24, 36],
    iconAnchor: [12, 36],
    popupAnchor: [0, -36]
  });

  communities.forEach(c => {
    const linksHtml = c.links.map(l =>
      `<a href="${l.url}" target="_blank" rel="noopener">${LINK_LABELS[l.type] || l.type}</a>`
    ).join('');

    const popup = `
      <div class="popup-content">
        <div class="popup-header">
          <img class="popup-logo" src="${c.logo}" alt="" onerror="this.style.display='none'">
          <h3>${c.name}</h3>
        </div>
        <div class="popup-location">${c.city}, ${c.country}</div>
        <div class="popup-desc">${c.description}</div>
        <div class="popup-links">${linksHtml}</div>
      </div>
    `;

    const marker = L.marker([c.lat, c.lng], { icon: redIcon }).addTo(map).bindPopup(popup);
    markers.push({ marker, data: c });
  });
}

function initTable() {
  const countrySelect = document.getElementById('country-filter');
  const searchInput = document.getElementById('search-input');
  const tbody = document.getElementById('table-body');

  const countries = [...new Set(communities.map(c => c.country))].sort();
  countries.forEach(country => {
    const opt = document.createElement('option');
    opt.value = country;
    opt.textContent = country;
    countrySelect.appendChild(opt);
  });

  function render() {
    const selectedCountry = countrySelect.value;
    const query = searchInput.value.toLowerCase().trim();

    const filtered = communities.filter(c => {
      const matchCountry = !selectedCountry || c.country === selectedCountry;
      const matchSearch = !query ||
        c.name.toLowerCase().includes(query) ||
        c.city.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query);
      return matchCountry && matchSearch;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" class="empty-state">Ничего не найдено</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(c => {
      const linksHtml = c.links.map(l =>
        `<a href="${l.url}" target="_blank" rel="noopener">${LINK_LABELS[l.type] || l.type}</a>`
      ).join('');

      return `
        <tr>
          <td class="logo-cell"><img src="${c.logo}" alt="" onerror="this.style.display='none'"></td>
          <td class="name-cell">${c.name}</td>
          <td class="location-cell">${c.city}, ${c.country}</td>
          <td class="desc-cell">${c.description}</td>
          <td class="links">${linksHtml}</td>
        </tr>
      `;
    }).join('');
  }

  countrySelect.addEventListener('change', render);
  searchInput.addEventListener('input', render);
  render();
}

function switchTab(tab) {
  const views = {
    map: document.getElementById('map-view'),
    table: document.getElementById('table-view'),
    about: document.getElementById('about-view'),
  };

  const displayMode = { map: 'block', table: 'block', about: 'flex' };
  Object.entries(views).forEach(([key, el]) => {
    el.style.display = key === tab ? displayMode[key] : 'none';
  });

  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });
  document.querySelectorAll('.mobile-nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });

  if (tab === 'map') setTimeout(() => map.invalidateSize(), 50);
}

function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  const burgerBtn = document.getElementById('burger-btn');
  const mobileNav = document.getElementById('mobile-nav');

  burgerBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
      mobileNav.classList.remove('open');
      window.scrollTo(0, 0);
    });
  });
}

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('load', () => { if (map) map.invalidateSize(); });
