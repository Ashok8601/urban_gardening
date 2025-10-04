/*
 * scripts.js
 * Khan Sir Hospital Patna - Performance & SEO Enhancements
 */

document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. Image Lazy Loading Implementation ---
    // Intersection Observer is the modern standard for lazy loading
    
    const lazyImages = document.querySelectorAll(".lazyimg");
    
    const lazyLoad = (target) => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // If the element is visible on screen
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute("data-src");

                    if (src) {
                        img.setAttribute('src', src);
                        // Remove the placeholder class after loading
                        img.classList.remove("lazyimg"); 
                        observer.disconnect();
                    }
                }
            });
        });
        io.observe(target);
    };

    lazyImages.forEach(lazyLoad);

    // --- 2. SEO Keywords Population ---
    
    const metaKeywordsElement = document.getElementById("meta-keywords");
    const baseKeywords = metaKeywordsElement.getAttribute("content").split(', ');

    // Add more related keywords to reach the desired density and breadth
    const additionalKeywords = [
        "best hospital in patna", "affordable treatment patna", "khan sir trust hospital", 
        "dialysis cost patna", "ashok rajpath hospital timings", "patna blood bank number", 
        "charity hospital bihar", "khan sir new initiative", "cancer care patna",
        "emergency services patna", "OPD appointment patna", "healthcare for poor bihar"
    ];

    // Combine and ensure uniqueness (optional, but good practice)
    const allKeywords = [...new Set([...baseKeywords, ...additionalKeywords])].join(', ');
    
    // Set the final, expanded keyword list (SEO optimization)
    metaKeywordsElement.setAttribute("content", allKeywords);

    // --- 3. Smooth Scrolling for Navigation (Optional UI Enhancement) ---
    document.querySelectorAll('.site-header nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
