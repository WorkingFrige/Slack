window.onload = () => {
    const header = document.querySelector('.header');
    // const headerHeight = header.offsetHeight;
    const firstSection = document.querySelector('.promo');
    const firstSectionHeight = firstSection.offsetHeight;

    window.addEventListener('scroll', () => {
       let scrollDistance = window.scrollY;

       if (scrollDistance >= firstSectionHeight / 2) {
           header.classList.add('sticky');
       } else {
           header.classList.remove('sticky');
       }
    });



    const burgerOpen = document.getElementById('headerBurger');
    const burgerClose = document.getElementById('headerBurgerClose');

    const nav = document.getElementById('nav');

    burgerOpen.addEventListener('click', () => {
        nav.classList.add('active');
        document.body.classList.add('lock');
    });

    burgerClose.addEventListener('click', () => {
        nav.classList.remove('active');
        document.body.classList.remove('lock');
    });


    const regionModule = document.getElementById('switchRegion');
    const openRegion = document.getElementById('openRegion');
    const closeRegion = document.getElementById('closeRegion');

    openRegion.addEventListener('click', () => {
       regionModule.classList.add('active');
       header.classList.remove('sticky');
    });

    closeRegion.addEventListener('click', () => {
       regionModule.classList.remove('active');
       header.classList.add('sticky');
    });

    regionModule.addEventListener('click', (e) => {
       if (e.target === regionModule) {
          regionModule.classList.remove('active');
          header.classList.add('sticky');
       }
    });


    const footerNav = [...document.getElementsByClassName('footer__top-links_h5')];

    footerNav.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('active');
            // console.log(el.nextSibling)
            // el.nextSibling.classList.toggle('active');
        })
    });



}


let isOpened = false;

function openHeaderAcc() {
    document.getElementById('headerAcc').classList.toggle('active');
    isOpened = true;
}

const productAcc = document.getElementById('headerAcc');
// const accordion = document.getElementById('productAccItem');

window.onclick = (e, ) => {
    if (!e.target.matches('#headerAcc')) {
        if (document.getElementById('headerAcc').classList.contains('active')) {
            document.getElementById('headerAcc').classList.remove('active');
        }
    }

    // if (!e.target.matches('.region')) {
    //     document.getElementById('switchRegion').classList.remove('active');
    // }

};
