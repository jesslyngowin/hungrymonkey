const menuImgConts = document.querySelectorAll('.menu-img-cont');

menuImgConts.forEach((menuImgCont) => {
    menuImgCont.addEventListener('mouseover', () => {
        menuImgCont.classList.add('hovered');
    });

    menuImgCont.addEventListener('mouseout', () => {
        menuImgCont.classList.remove('hovered');
    });
});