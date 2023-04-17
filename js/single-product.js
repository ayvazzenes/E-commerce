import { thumbsActiveFunc } from "./singleProduct/thumbsActive.js";
import { singleThumbs } from "./glide.js";
import zoomFunc from "./singleProduct/zoom.js";
import { colorsFunc } from "./singleProduct/colors.js";
import { changeSizeFunc } from "./singleProduct/colors.js";
import tabsFunc from "./singleProduct/tabs.js";
import commentsFunc from "./singleProduct/comments.js";
colorsFunc();
changeSizeFunc();

thumbsActiveFunc();

const productId = localStorage.getItem("productId")
  ? JSON.parse(localStorage.getItem("productId"))
  : localStorage.setItem("productId", JSON.stringify(1));

const products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem("products", JSON.stringify([]));

const findProduct = products.find((item) => item.id === Number(productId));
const productName = document.querySelector(".product-title");
const newPriceDOM = document.querySelector(".new-price");
const oldPriceDOM = document.querySelector(".old-price");

productName.innerHTML = findProduct.name;
newPriceDOM.innerHTML = findProduct.price.newPrice.toFixed(2);
oldPriceDOM.innerHTML = findProduct.price.oldPrice.toFixed(2);

const singleImageDom = document.querySelector("#single-image");
singleImageDom.src = findProduct.img.singleImage;

const galleryThumbs = document.querySelector(".gallery-thumbs");
let result = "";
findProduct.img.thumbs.forEach((item) => {
  result += `
  <li class="glide__slide">
   <img src=${item} alt="" class="img-fluid">
  </li>
  `;
});

galleryThumbs.innerHTML = result;
singleThumbs();
thumbsActiveFunc();
const productThumbs = document.querySelectorAll(
  ".product-thumb .glide__slide img"
);
productThumbs[0].classList.add("active");

//! add to cart
let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const findCart = cart.find((item) => item.id === findProduct.id);
const btnAdddToCart = document.getElementById("add-to-cart");
const quantityDOM = document.getElementById("quantity");
let cartItems = document.querySelector(".heaader-cart-count");

if (findCart) {
  btnAdddToCart.setAttribute("disabled", "disabled");
} else {
  btnAdddToCart.addEventListener("click", function () {
    //single-product.html dosyasında form içerssindeki butona type buton dersek tıklandığğında sayfa yenilenmez teknik detay
    cart.push({ ...findProduct, quantity: Number(quantityDOM.value) });
    btnAdddToCart.setAttribute("disabled", "disabled");
    localStorage.setItem("cart", JSON.stringify(cart));
  });
}
