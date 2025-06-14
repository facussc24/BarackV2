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

function exportTable() {
  const table = document.querySelector('#amfe table');
  if (!table) return;
  const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent);
  const rows = Array.from(table.querySelectorAll('tbody tr')).map(tr =>
    Array.from(tr.querySelectorAll('td')).map(td => td.textContent)
  );
  const csvRows = [headers, ...rows].map(r =>
    r.map(field => '"' + String(field).replace(/"/g, '""') + '"').join(',')
  ).join('\n');
  const blob = new Blob([csvRows], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'amfe.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
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
  const exportBtn = document.getElementById('export');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportTable);
  }
  loadData();
});
