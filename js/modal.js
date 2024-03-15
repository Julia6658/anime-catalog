
const modalShow = () => {
    const modal = document.querySelector('.search-model');
    const modalBtn = document.querySelector('.icon_search');
    const modalClose= modal.querySelector('.search-close-switch');
    const inputSearch = modal.querySelector('#search-input');

    inputSearch.addEventListener('keyup', () => {
        console.log(inputSearch.value);
    })


    modalBtn.addEventListener('click', () => {
        modal.style.display = "block"
    })

    modalClose.addEventListener('click', () => {
        modal.style.display = "none"
    })
}

modalShow();