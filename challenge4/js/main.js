let icon = document.querySelector(".icon");
let input = document.querySelector("input");

icon.onclick = () => {
  input.classList.toggle("active");
  input.focus();
};
