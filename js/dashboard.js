fetch('data/latest.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('policy-list');
    const search = document.getElementById('search');
    const filter = document.getElementById('change-filter');

    function render(items) {
      list.innerHTML = '';
      for (const item of items) {
        const div = document.createElement('div');
        div.className = 'policy-item';
        div.innerHTML = `<strong>${item.id}</strong> - ${item.title} <em>(${item.status})</em>`;
        div.onclick = () => showModal(item);
        list.appendChild(div);
      }
    }

    function showModal(item) {
      document.getElementById('modal-content').innerHTML =
        `<h2>${item.title}</h2><pre>${item.content}</pre>`;
      document.getElementById('modal').classList.remove('hidden');
    }

    document.getElementById('close-modal').onclick = () =>
      document.getElementById('modal').classList.add('hidden');

    function update() {
      const q = search.value.toLowerCase();
      const f = filter.value;
      const filtered = data.filter(d =>
        (d.title.toLowerCase().includes(q) || d.id.includes(q)) &&
        (!f || d.status === f)
      );
      render(filtered);
    }

    search.oninput = update;
    filter.onchange = update;
    render(data);
  });