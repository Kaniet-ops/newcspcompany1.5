let slider = document.querySelector('.row')
  let swiper
  function mobileSlider(slider) {
    if(window.innerWidth < 768 && slider.dataset.mobile === 'false') {
      swiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        slideClass: 'column',
        pagination: {
        	el: '.swiper-pagination',
        	clickable: true,
        },
      })
      slider.dataset.mobile = 'true'
    }
    if(window.innerWidth >= 768) {
      slider.dataset.mobile = 'false'

      if(slider.classList.contains('swiper-container-initialized')) {
        swiper.destroy()
      }
    }
  }
  mobileSlider(slider)
  showAll()

  window.addEventListener('resize', function() {
    mobileSlider(slider)
  })

  function showAll() {
  let arrow = document.querySelector('.arrow')
  let arrowText =  document.querySelector('.arrow__text')
  let arrowImg = document.querySelector('.arrow__img')
  let cards = document.querySelectorAll('.section__column--hide')

  arrow.addEventListener('click', function() {
    if(arrowText.innerHTML === 'Скрыть') {
      arrowText.innerHTML = 'Показать все'
      arrowImg.src = '/img/expand.svg'
    } else {
      arrowText.innerHTML = 'Скрыть'
      arrowImg.src = 'img/expand-up.svg'
    }

    for(let i = 0; i < cards.length; i++) {
      cards[i].classList.toggle('section__column--hide')
    }
  })
}
