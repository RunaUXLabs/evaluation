const menu = document.querySelector("#menu");
const sidebar = document.querySelector(".sidebar");

// 사이드바 클릭 시 나오는 스크립트
menu.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
