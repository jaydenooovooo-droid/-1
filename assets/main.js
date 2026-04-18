const button = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
if (button && nav) {
  button.addEventListener('click', () => nav.classList.toggle('open'));
}
