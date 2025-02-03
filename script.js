// Function for reveal on scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  // Arrow onclick scroll down
  document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.querySelector(".arrow");
  
    // Ensure the element exists before adding event listener
    if (arrow) {
      arrow.addEventListener("click", () => {
        const scrollDistance = window.innerHeight;
        window.scrollBy(0, scrollDistance);
      });
    }
  });
  
  // Bottom to top button script
  $(document).ready(function () {
    var btn = $("#button");
  
    $(window).scroll(function () {
      // Show the button when the user scrolls down 300px
      if ($(window).scrollTop() > 300) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
    });
  
    // Scroll back to the top when the button is clicked
    btn.on("click", function (e) {
      e.preventDefault();
      window.scrollTo(0, 0);
    });
  });
  
  // Links for directing to specific content (sections)
  document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".__container [data-section]");
  
    navItems.forEach(function (item) {
      item.addEventListener("click", function () {
        const targetId = this.getAttribute("data-section");
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });
  
  
  