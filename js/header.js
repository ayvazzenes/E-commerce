function sidebarFunc() {
  //! home side bar start
  const btnOpenSidebar = document.querySelector("#btn-menu");
  const sidebar = document.querySelector("#sidebar");
  const closeSidebar = document.querySelector("#close-sidebar");
  btnOpenSidebar.addEventListener("click", function () {
    sidebar.style.left = "0";
  });
  closeSidebar.addEventListener("click", function () {
    sidebar.style.left = "-100%";
  });

  //? click outside start

  document.addEventListener("click", function (event) {
    if (
      !event.composedPath().includes(sidebar) &&
      !event.composedPath().includes(btnOpenSidebar)
    ) {
      sidebar.style.left = "-100%";
    }
  });

  //? click outside end

  //! home side bar end
}

function searchModalFunc() {
  //? search modal start
  const searchOpenButton = document.querySelector("#search-click-button");
  const modalSearch = document.querySelector("#modal-search");
  const closedModalSearch = document.querySelector("#closed-modal-search");
  const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");

  searchOpenButton.addEventListener("click", function () {
    modalSearch.style.visibility = "visible";
    modalSearch.style.opacity = "1";
  });
  closedModalSearch.addEventListener("click", function () {
    modalSearch.style.visibility = "hidden";
    modalSearch.style.opacity = "0";
  });
  //? click outside start
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(modalSearchWrapper[0]) &&
      !e.composedPath().includes(searchOpenButton)
    ) {
      modalSearch.style.visibility = "hidden";
      modalSearch.style.opacity = "0";
    }
  });
  //? click outside end

  //? search modal end
}
function headerFunc() {
  sidebarFunc();
  searchModalFunc();
}
export default headerFunc();
