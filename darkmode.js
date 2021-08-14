function eraseText() {
  document.getElementById("message").value = "";
}

const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
});
