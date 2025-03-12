document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
  
    if (menuToggle && mobileMenu) { // Check if elements exist
      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }
  });
  
  
/*testinomial section function

        



// Function to update testimonials
function updateTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        dots[i].classList.remove('active');
    });

    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
}

// Function to manually change testimonial
window.changeTestimonial = function(index) {  // ✅ Making it globally accessible
    currentIndex = index;
    updateTestimonial(currentIndex);
    resetAutoSlide();  // Reset auto-slide when user interacts
};

// Auto-slide function
function autoSlide() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
}

// Reset auto-slide timer when user interacts
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 4000); // Auto-slide every 4 seconds
}

// Start auto-slide on page load
document.addEventListener("DOMContentLoaded", () => {
    updateTestimonial(currentIndex);
    autoSlideInterval = setInterval(autoSlide, 4000);
});

testimonial section end here*/

  // $("#custome_content").load("./HomeScreen/index.html");

  function navigate(page) {
    window.location.hash = page;  // Change URL without reloading
    loadPage(page + ".html");
}

function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("custome_content").innerHTML = data;
        })
        .catch(error => console.error("Error loading the page:", error));
}




    var menue = document.getElementById('menu-toggle')
    if(menue){
        menu.addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });

    }
