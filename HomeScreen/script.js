
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("hidden");
        });
    } else {
        console.error("Hamburger menu elements not found!");
    }
});

window.onload = function () {
    let currentIndex = 0;
    const slider = document.getElementById("slider");
    const slides = slider ? slider.children : [];
    const dots = document.querySelectorAll(".dot");
    const totalSlides = slides.length;

    if (!slider) {
        console.error("Slider element not found!");
        return;
    }

    // Dynamically set width based on total slides
    slider.style.width = `${totalSlides * 100}%`;

    let autoSlide = setInterval(nextSlide, 2500);

    function moveSlide(index) {
        clearInterval(autoSlide);
        currentIndex = index;
        updateSlider();
        autoSlide = setInterval(nextSlide, 2500);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
            dot.classList.toggle("bg-red-400", i === currentIndex);
            dot.classList.toggle("bg-gray-400", i !== currentIndex);
        });
    }

    // Add event listeners to dots
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => moveSlide(i));
    });

    // Expose moveSlide globally for button onclick
    window.moveSlide = moveSlide;
};

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




    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });
