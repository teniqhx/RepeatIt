document.addEventListener('DOMContentLoaded', function() {
    const headerElement = document.querySelector('header .headContent h2');
    const mainElement = document.querySelector('main');
    
    // Вміст для різних сторінок
    const pages = {
        home: {
            header: 'Home',
            content: '<h2>Welcome to Home</h2><p>This is the home page content.</p>'
        },
        groups: {
            header: 'Groups',
            content: '<h2>Your Groups</h2><p>This is where your groups will be displayed.</p>'
        },
        calendar: {
            header: 'Calendar',
            content: '<h2>Your Calendar</h2><p>This is your calendar view.</p>'
        },
        inbox: {
            header: 'Inbox',
            content: '<h2>Your Inbox</h2><p>Here are your messages.</p>'
        },
        profile: {
            header: 'Profile',
            content: '<h2>Your Profile</h2><p>Here is your profile information.</p>'
        }
    };

    // Функція для оновлення вмісту
    function updateContent(pageKey) {
        if (pages[pageKey]) {
            headerElement.textContent = pages[pageKey].header;
            mainElement.innerHTML = pages[pageKey].content;
        }
    }

    // Обробка кліків по посиланням в навігації
    document.querySelectorAll('footer nav a').forEach(link => {
        link.addEventListener('click', function() {
            // Видалення активного класу з усіх посилань
            document.querySelectorAll('footer nav a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Отримуємо назву сторінки з атрибуту data-page або тексту посилання
            const pageKey = this.textContent.toLowerCase().trim();
            
            // Оновлюємо вміст
            updateContent(pageKey);
        });
    });

    // Відкриття першої сторінки за замовчуванням
    updateContent('home');
});
