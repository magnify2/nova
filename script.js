document.querySelectorAll('.menu ul li.item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.menu ul li.item').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach(el => {
        el.classList.remove("fade-in");
        setTimeout(() => el.classList.add("fade-in"), 100);
    });
});
