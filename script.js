const cross_l = document.getElementById("cross_l");
const cross_none = document.getElementById("cross_none");
const cross_r = document.getElementById("cross_r");
const nav = document.getElementById("fsm");
const cross = document.getElementById("hamburger");
const lefttext = document.querySelectorAll(".l");
const righttext = document.querySelectorAll(".r");
cross.addEventListener("click", () => {
  cross.classList.toggle("active");
  cross_l.classList.toggle("active_l");
  cross_r.classList.toggle("active_r");
  cross_none.classList.toggle("active_none");
  nav.classList.toggle("active_nav");
  lefttext.forEach((element) => {
    element.classList.toggle("text_l");
  });
  righttext.forEach((element) => {
    element.classList.toggle("text_r");
  });
});

document.querySelectorAll(".projectContent").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.classList.toggle("projectContent-active");
  });
  element.addEventListener("mouseleave", () => {
    element.classList.toggle("projectContent-active");
  });
});

// document.querySelectorAll(".blog_outer").forEach((element) => {
//   console.log(document.querySelectorAll(".blog_outer"));
//   element.addEventListener("mouseenter", () => {
//     element.classList.toggle("blog-active");
//   });
//   element.addEventListener("mouseleave", () => {
//     element.classList.toggle("blog-active");
//   });
// });
