const btnMobile = document.getElementById('btn-mobile');

//abrir e fechar o menu hamburguer quando o usuário clicar nele - open and close menu hamburguer when user click on it
function toggleMenu(event) {
    if(event.type === 'touchstart') {
        event.preventDefault()
    }
    const navi = document.getElementById('nav');
    navi.classList.toggle('active');
}

//fechar o menu quando o usuário clicar fora do menu hamburguer - close menu when user click outside off hamburguer menu
function clickOut(event) {
    const navi = document.getElementById('nav');
    if(event.target != navi) {
        navi.classList.remove('active');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
document.addEventListener('click', clickOut)


