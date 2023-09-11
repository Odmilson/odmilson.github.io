const experienceButton = document.getElementById('experience-button');
const experiencesList = document.querySelector('.experiences-list');

function calculateVisibleItemsHeight() {
    const visibleItems = document.querySelectorAll('.experience-list__item');    let totalHeight = 0;

    visibleItems.forEach(item => {
        totalHeight += item.offsetHeight
    });

    let rowGap = parseFloat(getComputedStyle(experiencesList).getPropertyValue('row-gap'));

    return totalHeight + (rowGap * (visibleItems.length - 1));
}

experiencesList.style.maxHeight = calculateVisibleItemsHeight() + 'px';

let isVisibleMore = false;

experienceButton.addEventListener('click', () => {
    if (isVisibleMore) {
        experiencesList.style.maxHeight = calculateVisibleItemsHeight() + 'px';
    } else {
        experiencesList.style.maxHeight = '1000vw';
    }

    if (isVisibleMore) {
        experienceButton.textContent = 'MAIS';
    } else {
        experienceButton.textContent = 'MENOS';
    }

    isVisibleMore = !isVisibleMore;
});
