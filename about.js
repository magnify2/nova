document.querySelectorAll('.menu ul li.item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.menu ul li.item').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});
