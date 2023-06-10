const menuBtn = document.querySelector("#menu__btn");
const opened = document.querySelector(".opened");
const closed = document.querySelector(".closed");
const list = document.querySelector("menu ul");
const menu = document.querySelector("menu");
const header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
  opened.classList.toggle("hidden");
  closed.classList.toggle("hidden");
  list.classList.toggle("scale-0");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      menu.classList.add("fixed", "left-0", "right-0", "bg-menu-fixed", "z-10");
    } else {
      menu.classList.remove(
        "fixed",
        "left-0",
        "right-0",
        "bg-menu-fixed",
        "z-10"
      );
    }
  });
});

observer.observe(header);
