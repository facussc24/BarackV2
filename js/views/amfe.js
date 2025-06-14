function renderSimpleTable(containerId, rows) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  const table = document.createElement('table');
  if (!rows.length) {
    container.appendChild(document.createTextNode('No data'));
    return;
  }
  const headers = Object.keys(rows[0]);
  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');
  headers.forEach(h => {
    const th = document.createElement('th');
    th.textContent = h;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  table.appendChild(thead);
  const tbody = document.createElement('tbody');
  rows.forEach(r => {
    const tr = document.createElement('tr');
    headers.forEach(h => {
      const td = document.createElement('td');
      td.textContent = r[h];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  container.appendChild(table);
}

function renderAMFE(rows) {
  renderSimpleTable('amfe', rows);
}

function loadData() {
  document.getElementById('loading').style.display = 'block';
  dataService.getAll('amfe').then(rows => {
    renderAMFE(rows);
  }).finally(() => {
    document.getElementById('loading').style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('refresh').addEventListener('click', loadData);
  loadData();
});
