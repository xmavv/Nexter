const imgsBox = document.querySelectorAll('.gallery__item');
const burgerBtn = document.querySelector('.burger');

function wide(e) {
    this.classList.toggle('wide-box');
    const img = this.childNodes[0];
    img.classList.toggle('wide');
}

function sidebarMove(e) {
    const sidebarContainer = this.parentNode;
    const burgerNav = sidebarContainer.childNodes[3];
    const sidebar = sidebarContainer.parentNode;
    sidebar.classList.toggle('increaseWidth')
    burgerNav.classList.toggle('d-none');
    burgerNav.classList.toggle('translate100');
    this.classList.toggle('active');
}

imgsBox.forEach(img => img.addEventListener('click', wide));

burgerBtn.addEventListener('click', sidebarMove);