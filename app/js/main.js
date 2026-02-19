const lenis = new Lenis({
  autoRaf: true,
  lerp: 0.1,
});


if (document.querySelector('.hero')) {
    let hero = new Splide('.hero-slider', {
        type: 'loop',
        perPage: 1,
        gap: '24px',
        perMove: 1,
    }).mount()
}


document.addEventListener('DOMContentLoaded', () => {
    const ticker = document.querySelector('#brandsTicker .brands__body-stroke');

    const clone = ticker.cloneNode(true);
    ticker.parentElement.appendChild(clone);

    const speed = 50;
    let width = ticker.offsetWidth;

    gsap.to('#brandsTicker .brands__body-stroke', {
        x: -width,
        duration: width / speed,
        ease: "linear",
        repeat: -1
    });
    gsap.to('#brandsTicker .brands__body-stroke:nth-child(2)', {
        x: -width,
        duration: width / speed,
        ease: "linear",
        repeat: -1,
        delay: width / speed
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const tickers = document.querySelectorAll('.search__wrapper-stroke');
    tickers.forEach((el) => {
        const clone = el.cloneNode(true);
        el.parentElement.appendChild(clone);
        const speed = 20;
        let width = el.offsetWidth;
        gsap.to('.search__wrapper-stroke', {
            x: -width,
            duration: width / speed,
            ease: "linear",
            repeat: -1
        });
        gsap.to('.search__wrapper-stroke:nth-child(2)', {
            x: -width,
            duration: width / speed,
            ease: "linear",
            repeat: -1,
            delay: width / speed
        });
    })
});

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.faq__item');

  items.forEach(item => {
    const header = item.querySelector('.faq__item-top');
    const content = item.querySelector('.faq__item-wrap');
    const icon = item.querySelector('svg');

    header.addEventListener('click', () => {
    setTimeout(() => {
        lenis.resize();
    }, 300);
      items.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const p = other.querySelector('.faq__item-wrap');
          const i = other.querySelector('svg');

          p.style.height = 0;
          i.style.transform = 'rotate(0deg)';
        }
      });
      item.classList.toggle('active');

      if (item.classList.contains('active')) {
        content.style.height = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(135deg)';
      } else {
        content.style.height = 0;
        icon.style.transform = 'rotate(0deg)';
      }
    });
  });
});
