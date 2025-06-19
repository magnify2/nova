document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.menu ul li.item');
    items.forEach(item => {
        item.addEventListener('click', function () {
            items.forEach(el => el.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
