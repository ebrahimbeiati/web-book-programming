// window.addEventListener("DOMContentLoaded", () => {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const id = entry.target.getAttribute("id");
//       if (entry.intersectionRatio > 0) {
//         document
//           .querySelector(`nav li a[href="#${id}"]`)
//           .parentElement.classList.add("active");
//       } else {
//         document
//           .querySelector(`nav li a[href="#${id}"]`)
//           .parentElement.classList.remove("active");
//       }
//     });
//   });

//   document.querySelectorAll("section[id]").forEach((section) => {
//     observer.observe(section);
//   });
// });


// scripts.js
// scripts.js


window.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for active link highlighting
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.intersectionRatio > 0) {
        document
          .querySelector(`nav li a[href="#${id}"]`)
          .parentElement.classList.add("active");
      } else {
        document
          .querySelector(`nav li a[href="#${id}"]`)
          .parentElement.classList.remove("active");
      }
    });
  });

  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });

  // Mobile menu toggle functionality
  const menuToggle = document.querySelector(".section-nav-toggle");
  const navMenu = document.querySelector(".section-nav");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("expanded");
    navMenu.classList.toggle("expanded");
  });

  // Hide menu after clicking a link on mobile
  document.querySelectorAll(".section-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("expanded");
        menuToggle.classList.remove("expanded");
      }
    });
  });
});
