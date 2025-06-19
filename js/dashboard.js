fetch('data/files.json')
  .then(res => res.json())
  .then(files => {
    const sorted = files.sort().reverse();
    const [latest, previous] = sorted;
    return Promise.all([
      fetch('data/' + latest).then(r => r.json()),
      fetch('data/' + previous).then(r => r.json())
    ]);
  })
  .then(([latestData, previousData]) => {
    const changes = document.getElementById("policy-results");
    changes.innerHTML = '<p>Compare logic would go here. Placeholder rendering.</p>';
  })
  .catch(err => {
    document.getElementById("policy-results").innerHTML = '<p>Error loading data.</p>';
  });
