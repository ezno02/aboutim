document.addEventListener('DOMContentLoaded', () => {
    const body = document.body
    const darkTheme = document.getElementById('dark-theme')
    const lightTheme = document.getElementById('light-theme')
    const backToTopBtn = document.getElementById('backToTopBtn')
    const menuBar = document.getElementById('menuBar')
    const spotifyDiv = document.getElementById('spotify-iframe')
    const atrasAlem = document.getElementById('atrasAlemLink')
    const mdqp = document.getElementById('melhorDoQuePareceLink')
    const oTerno = document.getElementById('oTernoLink')
    const meiaMeia = document.getElementById('meiaMeiaLink')
    const coisasInvisiveis = document.getElementById('milCoisasInvisiveisLink')
    const recomecar = document.getElementById('recomecarLink')
    const goBack = document.getElementById('background-spotify')

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

    function getIframe(card) {
        switch (card) {
            case 'atrasAlem':
                body.classList.add('spotify-body')
                spotifyDiv.innerHTML = '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/album/6B2dACJHYyu5lO3ws2pBbp?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
                break;
            case 'mdqp':
                body.classList.add('spotify-body')
                spotifyDiv.innerHTML = '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/album/6bjH9p0ZAdYbHqh8HFvspz?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
                break;
            case 'oTerno':
                body.classList.add('spotify-body')
                spotifyDiv.innerHTML = '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/album/4woRdLXHCk9gTvr7BbtOKX?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
                break;
            case '66':
                body.classList.add('spotify-body')
                spotifyDiv.innerHTML = '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/album/3iNtrqEywG7K98R4lYugx3?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
                break;
            case 'mci':
                body.classList.add('spotify-body')
                spotifyDiv.innerHTML = '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/album/0icYpEwVxogZ6mCERLIVpa?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
                break;
            case 'recomecar':
                body.classList.add('spotify-body')
                spotifyDiv.innerHTML = '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/album/6U97X9SjnkaBf94W5mkTs1?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
                break;

            case 'goBack':
                body.classList.remove('spotify-body')
                break;
        }
    }

    atrasAlem.addEventListener('click', () => {
        getIframe('atrasAlem')
    })
    mdqp.addEventListener('click', () => {
        getIframe('mdqp')
    })
    oTerno.addEventListener('click', () => {
        getIframe('oTerno')
    })
    meiaMeia.addEventListener('click', () => {
        getIframe('66')
    })
    coisasInvisiveis.addEventListener('click', () => {
        getIframe('mci')
    })
    recomecar.addEventListener('click', () => {
        getIframe('recomecar')
    })
    goBack.addEventListener('click', () => {
        getIframe('goBack')
    })

})
function clickMenu() {
    if (menuBar.style.scale == '1') {
        menuBar.style.scale = ('0')
    } else {
        menuBar.style.scale = ('1')
    }
}