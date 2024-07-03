const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.open-modal-button');
const closeModalButton = document.querySelector('.close-modal-button');

openModalButton.addEventListener('click', () => {
    modal.showModal();
});

closeModalButton.addEventListener('click', () => {
    modal.close();
});