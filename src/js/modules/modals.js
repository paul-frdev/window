const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    // trigger.addEventListener('click', (e) => {
    //   if (e.target) {
    //     e.preventDefault()
    //   }
    //   // вызов модального окна 
    //   modal.style.display = 'block';
    //   document.body.style.overflow = 'hidden';
    //   // document.body.classList.add('modal-open')
    // });
    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault()
        }

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // document.body.classList.add('modal-open')
      });
    });
    // закрытие модального окна 
    close.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      // document.body.classList.remove('modal-open')
    });
    // закрытие модального  при клике на темную поверхность
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        // document.body.classList.remove('modal-open')
      }
    });
  }

  function showModalByTime(selector, timeout) {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block'
      document.body.style.overflow = 'hidden';
    }, timeout);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  // showModalByTime('.popup', 3000)
}

export default modals;