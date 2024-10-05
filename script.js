document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        // Знаходимо поточний активний елемент і знімаємо клас active
        const activeLink = document.querySelector('nav a.active');
        if (activeLink) {
            activeLink.classList.remove('active');
            const activeSvg = activeLink.querySelector('svg');
            if (activeSvg) activeSvg.classList.remove('active');
        }

        // Додаємо клас active до натиснутого елемента
        this.classList.add('active');
        const svg = this.querySelector('svg');
        if (svg) svg.classList.add('active');
    });
});