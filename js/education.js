const educationButton = document.getElementById('education-button');
const educationList = document.querySelector('.table-education__body');

function calculateVisibleEduItemsHeight() {
    const visibleItems = educationList.querySelectorAll('.table-education__row');
    let totalHeight = 0;

    visibleItems.forEach(item => {
        totalHeight += item.offsetHeight;
    });

    let rowGap = parseFloat(getComputedStyle(educationList).getPropertyValue('row-gap'));

    return totalHeight + (rowGap * (visibleItems.length - 1));
}

educationList.style.maxHeight = calculateVisibleEduItemsHeight() + 'px';

let isShowingMore = false;

educationButton.addEventListener('click', () => {
    if (isShowingMore) {
        educationList.style.maxHeight = calculateVisibleEduItemsHeight() + 'px';
    } else {
        educationList.style.maxHeight = '1000vw'; 
    }

    // Altere o texto do botão e atualize o estado
    if (isShowingMore) {
        educationButton.textContent = 'MAIS';
    } else {
        educationButton.textContent = 'MENOS';
    }

    isShowingMore = !isShowingMore;
});

