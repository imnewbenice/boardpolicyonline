fetch('data/latest.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('policy-changes');
    container.innerHTML = data.changes.map(change => `
      <div class="change">
        <h3>${change.title}</h3>
        <p><strong>Status:</strong> ${change.status}</p>
        <p>${change.summary}</p>
      </div>
    `).join('');
  })
  .catch(err => {
    console.error('Failed to load JSON:', err);
    document.getElementById('policy-changes').innerHTML = '<p>Error loading policy data.</p>';
  });
