
document.addEventListener("DOMContentLoaded", () => {
  fetch('data/latest.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('policy-container').innerText = "Loaded policy data successfully.";
      // Further rendering logic goes here
    })
    .catch(() => {
      document.getElementById('policy-container').innerText = "Error loading policy data.";
    });
});
