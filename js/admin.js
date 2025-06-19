
function checkPassword() {
  const pass = document.getElementById('admin-pass').value;
  if (pass === "letmein") {
    document.getElementById('admin-login').classList.add('hidden');
    document.getElementById('admin-panel').classList.remove('hidden');
  } else {
    alert("Incorrect password.");
  }
}
