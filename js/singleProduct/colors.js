export function colorsFunc() {
  const colors = document.querySelectorAll(".color-wrapper");

  colors.forEach((color) => {
    color.addEventListener("click", function () {
      colors.forEach((item) => {
        item.classList.remove("active");
      });
      color.classList.add("active");
    });
  });
}
export function changeSizeFunc() {
  const sizes = document.querySelectorAll(".values-list span");
  sizes.forEach((item) => {
    item.addEventListener("click", function () {
      sizes.forEach((change) => {
        change.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
}
