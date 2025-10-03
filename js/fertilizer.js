document.addEventListener('DOMContentLoaded', function() {
    
    // Function to enable smooth scrolling for 'Back to Top' link
    function enableSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault(); 
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Scroll to the element smoothly
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    enableSmoothScroll();
    
    // Optional: Simple user engagement check
    const recipes = document.querySelectorAll('.recipe-step');
    recipes.forEach((recipe, index) => {
        recipe.addEventListener('click', function() {
            console.log(`User engaged with Recipe ${index + 1}: ${recipe.querySelector('h2').textContent}`);
        });
    });
});
