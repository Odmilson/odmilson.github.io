const navLinks = document.querySelectorAll(".navbar__link");
const navTexts = document.querySelectorAll(".navbar__text");
let activeIndex = 0;
let hoverTimer; 
let isHovered = false;

navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        activeIndex = index;
        activateItem(activeIndex);
    });

    link.addEventListener('mouseover', () => {
        clearTimeout(hoverTimer); 
        isHovered = true;
        activateItem(index);
    });

    link.addEventListener('mouseleave', () => {
        isHovered = false;
        startDeactivationTimer();
    });
});


function activateItem(index) {
    navLinks.forEach((navLink, i) => {
        navLink.classList.remove("navbar__link--active");
        navTexts[i].classList.remove("navbar__text--active");
    });
    navLinks[index].classList.add("navbar__link--active");
    navTexts[index].classList.add("navbar__text--active");
}


function startDeactivationTimer() {
    clearTimeout(hoverTimer); 
    hoverTimer = setTimeout(() => {
        if (!isHovered) {
            activateItem(activeIndex);
        }
    }, 500); 
}

const header = document.querySelector('.header');
const scrollThreshold = 100; // A quantidade de rolagem a partir do topo para ativar o cabeçalho opaco

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        header.classList.add('header--active');
    } else {
        header.classList.remove('header--active');
    }
});


let menuOpen = true;

function toggleMenu() {
    const navList = document.querySelector('#menu');
    const navButton = document.querySelector('#menu-toggle');
    
    if (!menuOpen) {
        navList.style.transform = 'translateX(0)';
        navButton.style.transform = 'rotate(-90deg)';
    } else {
        navList.style.transform = 'translateX(150%)';
        navButton.style.transform = 'rotate(0) translate(0)';
    }
    
    menuOpen = !menuOpen;
}


