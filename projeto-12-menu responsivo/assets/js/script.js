function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');

    /*if = abrir e fechar*/
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        /*imagem*/
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        /*imagem*/
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}