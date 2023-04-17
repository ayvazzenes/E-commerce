const productsContainer = document.getElementById("urunler");
const productsContainer2 = document.getElementById("new-urunler");

export function product1() {
  const config = {
    perView: 4,
    gap: 20,
    autoplay: 3000,
    bound: true,
    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };

  productsContainer && new Glide(".glide", config).mount();
}
export function product2() {
  const config2 = {
    perView: 4,
    gap: 20,
    autoplay: 3000,
    bound: true,
    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };

  productsContainer2 && new Glide(".glide2", config2).mount();
}
export function singleThumbs() {
  const config3 = {
    perView: 5,
    breakpoints: {
      992: {
        perView: 3,
      },
    },
  };

  new Glide(".product-thumb", config3).mount();
}
