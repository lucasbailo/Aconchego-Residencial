// const btnMobile = document.getElementById('btn-mobile');

// function toggleMenu(event) {
//     if(event.type === 'touchstart') {
//         event.preventDefault()
//     }
//     const navi = document.getElementById('nav');
//     navi.classList.toggle('active')
// }

// btnMobile.addEventListener('click', toggleMenu);
// btnMobile.addEventListener('touchstart', toggleMenu);


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if(event.type === 'touchstart') {
        event.preventDefault()
    }
    const navi = document.getElementById('nav');
    navi.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
