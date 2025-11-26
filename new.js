document.querySelectorAll(".question-btn").forEach(button => {
  button.addEventListener("click", e => {
    e.target.closest(".question").classList.toggle("show");
  });
});
