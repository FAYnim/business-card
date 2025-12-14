document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = toggleButton.querySelector('i');
    
    const STORAGE_KEY = 'personalink-glass-theme';

    // Fungsi update UI
    const updateUI = (theme) => {
        // Update atribut root
        htmlElement.setAttribute('data-theme', theme);
        
        // Update Ikon
        if (theme === 'dark') {
            icon.classList.remove('fa-adjust');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-adjust');
        }
    };

    // Fungsi Simpan & Apply
    const setTheme = (theme) => {
        localStorage.setItem(STORAGE_KEY, theme);
        updateUI(theme);
    };

    // 1. Inisialisasi Tema
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    
    if (savedTheme) {
        updateUI(savedTheme);
    } else {
        setTheme('light');
    }

    // 2. Event Listener
    toggleButton.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
});