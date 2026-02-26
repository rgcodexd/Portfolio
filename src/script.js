document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Default theme based on user's system or fallback to dark
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

    // Force dark theme as initial as per design if no preference is set
    if (!localStorage.getItem('theme')) {
        currentTheme = 'dark';
    }

    // Apply theme
    const applyTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    // Apply initial theme
    applyTheme(currentTheme);

    // Toggle button handler
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            currentTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(currentTheme);
        });
    }
});
