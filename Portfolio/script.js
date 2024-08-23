document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    icon.addEventListener('click', () => {
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    });
});
