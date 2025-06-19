function checkPassword() {
  const pass = document.getElementById('admin-pass').value;
  if (pass === 'letmein') {
    document.getElementById('admin-panel').classList.remove('hidden');
    document.getElementById('admin-login').classList.add('hidden');
  } else {
    alert('Incorrect password.');
  }
}
