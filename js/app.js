const imgsBox = document.querySelectorAll('.gallery__item');
const imgs = document.querySelectorAll('.gallery__img');

function wide(e) {
    this.classList.toggle('wide-box');
    const img = this.childNodes[0];
    img.classList.toggle('wide');
}

imgsBox.forEach(img => img.addEventListener('click', wide));