document.addEventListener('DOMContentLoaded', () => {
    const body = document.body
    const darkTheme = document.getElementById('dark-theme')
    const lightTheme = document.getElementById('light-theme')
    const backToTopBtn = document.getElementById('backToTopBtn')
    const menuBar = document.getElementById('menuBar')

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

    darkTheme.addEventListener('click', () => {
        toggleTheme('dark')
    })
    lightTheme.addEventListener('click', () => {
        toggleTheme('light')
    })

    // backscroll
    window.addEventListener('scroll', function () {
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show')
            } else {
                backToTopBtn.classList.remove('show')
            }
        }
        if (window.scrollY > 1) {
            body.classList.add('scrolled')
        } else {
            body.classList.remove('scrolled')
        }
    })
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
            })
        })
    }

})
function clickMenu() {
    if (menuBar.style.display == 'block') {
        menuBar.style.display = ('none')
    } else {
        menuBar.style.display = ('block')
    }
}