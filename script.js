console.log("Website Loaded");

let lastScrollTop = 0;
const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down → hide header
    header.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up → show header
    header.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
