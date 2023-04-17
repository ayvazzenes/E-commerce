let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

function displayCartProduct() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  let result = "";
  cart.forEach((item) => {
    result += `
        <tr class="cart-item">
            <td></td>
            <td class="cart-image">
            <img src=${item.img.singleImage} />
            <i class="bi bi-x delete-cart" data-id=${item.id}></i>
            </td>
            <td>${item.name}</td>
            <td>$${item.price.newPrice.toFixed(2)}</td>
            <td style="text-align: center">${item.quantity}</td>
            <td style="text-align: center">$${(
              item.price.newPrice * item.quantity
            ).toFixed(2)}</td>
        </tr>
    
    `;
  });
  cartWrapper.innerHTML = result;
  removeCart();
}
displayCartProduct();

function removeCart() {
  const btnDeleteCart = document.querySelectorAll(".delete-cart");

  btnDeleteCart.forEach((button) => {
    button.addEventListener("click", function (e) {
      const id = e.target.dataset.id;
      cart = cart.filter((item) => item.id !== Number(id));
      displayCartProduct();
      localStorage.setItem("cart", JSON.stringify(cart));
      savecartTotal();
    });
  });
}

function savecartTotal() {
  const subtotal = document.getElementById("subtotal");
  const fastcargo = document.getElementById("fastcargo");
  const total = document.getElementById("total");
  const fastCargoPrice = 15;
  let itemsTotal = 0;

  cart.length > 0 &&
    cart.map((item) => (itemsTotal += item.price.newPrice * item.quantity));

  subtotal.innerHTML = `$${itemsTotal.toFixed(2)}`;
  total.innerHTML = `$${itemsTotal.toFixed(2)}`;
  fastcargo.addEventListener("change", function (e) {
    if (e.target.checked) {
      total.innerHTML = `$${(itemsTotal + fastCargoPrice).toFixed(2)}`;
    } else {
      total.innerHTML = `$${itemsTotal.toFixed(2)}`;
    }
  });
}
savecartTotal();
