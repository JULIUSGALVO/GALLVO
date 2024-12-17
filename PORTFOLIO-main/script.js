// Select filter links and images
let filterLinks = document.querySelectorAll('.item-link');
let filterImages = document.querySelectorAll('.project-img');

// Add event listener for filter clicks
filterLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        // Remove 'menu-active' class from all links
        document.querySelector('.menu-active').classList.remove('menu-active');

        // Add 'menu-active' class to the clicked link
        event.target.classList.add('menu-active');

        // Get the filter name from the clicked link
        let filterName = event.target.getAttribute('data-name');

        // Loop through all images and toggle visibility
        filterImages.forEach((image) => {
            let imageName = image.getAttribute('data-name');
            if (filterName === 'all' || imageName === filterName) {
                image.style.display = ''; // Use default CSS display
            } else {
                image.style.display = 'none';
            }
        });
    });
});
