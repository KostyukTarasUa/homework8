const buttons = document.querySelectorAll('.portfolio-filter-buttons');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('portfolio-filter-buttons-active'));
        button.classList.add('portfolio-filter-buttons-active');
    });
});