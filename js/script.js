// スライダーライブラリ Swiper.js
var init = function () {
  new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 200,
  });
}

document.addEventListener('DOMContentLoaded', init);
