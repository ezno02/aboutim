document.addEventListener('DOMContentLoaded', () => {
    const body = document.body
    const darkTheme = document.getElementById('dark-theme')
    const lightTheme = document.getElementById('light-theme')

    // funçaõ dark/light mode
    function toggleTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode')
            darkTheme.style.fontSize = ('0')
            lightTheme.style.fontSize = ('1.6rem')
        } else {
            body.classList.remove('dark-mode')
            darkTheme.style.fontSize = ('1.6rem')
            lightTheme.style.fontSize = ('0')
        }
    }

    // event listeners theme
    darkTheme.addEventListener('click', () => {
        toggleTheme('dark')
    })
    lightTheme.addEventListener('click', () => {
        toggleTheme('light')
    })
})