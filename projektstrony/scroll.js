document.getElementById('scroll-top').onclick = (e) => {
    window.scrollTo(
      {
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
    )
}

const toTop = document.querySelector("#scroll-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})