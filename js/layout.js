document.addEventListener("DOMContentLoaded", () => {
  fetch("partials/header.html")
    .then(res => res.text())
    .then(data => document.getElementById("site-header").innerHTML = data);
  fetch("partials/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("site-footer").innerHTML = data);
});
