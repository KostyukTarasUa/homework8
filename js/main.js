const buttons = document.querySelectorAll('.filter-buttons');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('is-active'));
        button.classList.add('is-active');
    });
});