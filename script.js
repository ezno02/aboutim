document.addEventListener('DOMContentLoaded', () => {
    const body = document.body
    const darkTheme = document.getElementById('dark-theme')
    const lightTheme = document.getElementById('light-theme')
    const okAlert = document.getElementById('continue')
    const cancelAlert = document.getElementById('cancel')

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

// Função que lida com o redirecionamento e o alerta
function showAlertAndRedirect(url) {
    // Adiciona a classe para mostrar o alerta (modal)
    document.body.classList.add('alert');

    // Retorna uma Promessa que será resolvida quando o usuário clicar
    return new Promise((resolve) => {
        // Encontra os botões do alerta
        const okButton = document.getElementById('okAlert');
        const cancelButton = document.getElementById('cancelAlert');

        // Adiciona um listener para o botão OK
        okButton.addEventListener('click', () => {
            document.body.classList.remove('alert');
            resolve(true); // Resolve a Promessa com 'true' para continuar
        }, { once: true }); // O { once: true } garante que o listener seja removido após o clique

        // Adiciona um listener para o botão Cancelar
        cancelButton.addEventListener('click', () => {
            document.body.classList.remove('alert');
            resolve(false); // Resolve a Promessa com 'false' para cancelar
        }, { once: true });
    }).then((shouldRedirect) => {
        // Quando a Promessa for resolvida, verifica se deve redirecionar
        if (shouldRedirect) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    });
}


})