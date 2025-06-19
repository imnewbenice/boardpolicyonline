function checkPassword() {
  const input = document.getElementById('admin-pass').value;
  if (input === 'admin123') {
    document.getElementById('admin-login').classList.add('hidden');
    document.getElementById('admin-panel').classList.remove('hidden');
  } else {
    alert('Incorrect password.');
  }
}