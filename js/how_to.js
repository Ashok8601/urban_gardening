document.addEventListener('DOMContentLoaded', function() {
    
    // Function to enable smooth scrolling for internal links (like the TOC)
    function enableSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                // Prevent default hash behavior
                e.preventDefault(); 
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Scroll to the element with a smooth effect
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    enableSmoothScroll();
    
    // Optional: Log to confirm script is working
    console.log("Urban Gardening Guide JS Loaded. Smooth scrolling enabled.");
});
