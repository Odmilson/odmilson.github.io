const portfolioButton = document.getElementById('portfolio-button');
const portfolioList = document.querySelector('.image-tables-wrapper');

function calculateVisiblePortfolioItemsHeight() {
    const visibleItems = portfolioList.querySelectorAll('.image-table__item:not(.image-table__item--disabled)');
    let totalHeight = 0;

    visibleItems.forEach(item => {
        totalHeight += item.offsetHeight;
    });

    let columnGap = parseFloat(getComputedStyle(portfolioList).getPropertyValue('column-gap'));

    return totalHeight + (columnGap * (visibleItems.length - 1));
}

portfolioList.style.maxHeight = calculateVisiblePortfolioItemsHeight() + 'px';

let portfolioMore = false;

portfolioButton.addEventListener('click', () => {
    const disabledItems = portfolioList.querySelectorAll('.image-table__item--disabled');

    if (!portfolioMore) {
        // Quando estiver mostrando mais, mostre os itens desativados
        disabledItems.forEach(item => {
            item.style.display = 'block';
        });

        portfolioList.style.maxHeight = calculateVisiblePortfolioItemsHeight() + 'px';
    } else {
        // Quando não estiver mostrando mais, oculte os itens desativados
        disabledItems.forEach(item => {
            item.style.display = 'none';
        });

        portfolioList.style.maxHeight = '10000vw';
    }

    // Altere o texto do botão e atualize o estado
    if (!portfolioMore) {
        portfolioButton.textContent = 'MENOS';
    } else {
        portfolioButton.textContent = 'MAIS';
    }

    portfolioMore = !portfolioMore;
});

const buttons = document.querySelectorAll('.button-portfolio');
const imageTables = document.querySelector('.image-tables');
const imageTableWidth = document.querySelector('.image-table').clientWidth;
const buttonPortfolioText = document.querySelectorAll('.button-portfolio__text');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        buttons.forEach((btn, index) => {
            btn.classList.remove('button-portfolio--active');
            buttonPortfolioText[index].classList.remove('button-portfolio__text--active');
        });

        button.classList.add('button-portfolio--active');
        buttonPortfolioText[index].classList.add('button-portfolio__text--active');

        const translateX = -index * imageTableWidth;

        imageTables.style.transform = `translateX(${translateX}px)`;
    });
});


