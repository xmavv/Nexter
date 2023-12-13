const imgsBox = document.querySelectorAll('.gallery__item');
const burgerBtn = document.querySelector('.burger');
const listItems = document.querySelectorAll('.burger-list__item');

function wide(e) {
    this.classList.toggle('wide-box');
    const img = this.childNodes[0];
    img.classList.toggle('wide');
}

function sidebarMove(e) {
    const sidebarContainer = this.parentNode;
    const burgerNav = sidebarContainer.childNodes[3];
    const sidebar = sidebarContainer.parentNode;
    burgerNav.classList.toggle('d-none');
    burgerNav.classList.toggle('translate100');
    this.classList.toggle('active');

    if (window.innerWidth > 600) {
        sidebar.classList.toggle('increaseWidth');
    } else {
        sidebarContainer.classList.toggle('changeBgc');
    }
}

function closeSideBar(e) {
    const burgerNav = this.parentNode.parentNode;
    const sidebarContainer = burgerNav.parentNode;
    const sidebar = sidebarContainer.parentNode;

    burgerNav.classList.toggle('d-none');
    burgerNav.classList.toggle('translate100');

    burgerBtn.classList.toggle('active');

    if (window.innerWidth > 600) {
        sidebar.classList.toggle('increaseWidth');
    } else {
        sidebarContainer.classList.toggle('changeBgc');
    }
}

imgsBox.forEach(img => img.addEventListener('click', wide));
burgerBtn.addEventListener('click', sidebarMove);
listItems.forEach(item => item.addEventListener('click', closeSideBar));