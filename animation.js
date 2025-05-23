document.addEventListener('DOMContentLoaded', function() {
    // Get all project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      const leftNav = card.querySelector('.left-nav');
      const rightNav = card.querySelector('.right-nav');
      const images = card.querySelectorAll('.photo-stack img');
      let currentIndex = 0;
      const totalImages = images.length;
      
      // Function to update image positions
      function updateImagePositions() {
        images.forEach((img, index) => {
          // Calculate relative position (considering circular rotation)
          let relativePos = (index - currentIndex + totalImages) % totalImages;
          
          // Set styles based on position
          if (relativePos === 0) {
            // Current image (top)
            img.style.zIndex = 3;
            img.style.transform = 'translateX(0) scale(1)';
            img.style.opacity = '1';
            img.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
          } else if (relativePos === 1 || relativePos === totalImages - 1) {
            // Image to the side
            const direction = relativePos === 1 ? -1 : 1;
            img.style.zIndex = 2;
            img.style.transform = `translateX(${15 * direction}px) scale(0.95)`;
            img.style.opacity = '0.8';
            img.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          } else {
            // Further back
            const direction = relativePos <= totalImages / 2 ? -1 : 1;
            img.style.zIndex = 1;
            img.style.transform = `translateX(${30 * direction}px) scale(0.9)`;
            img.style.opacity = '0.6';
            img.style.boxShadow = 'none';
          }
        });
      }
      
      // Navigate left (show previous image)
      leftNav.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateImagePositions();
      });
      
      // Navigate right (show next image)
      rightNav.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % totalImages;
        updateImagePositions();
      });
      
      // Auto rotation (optional)
      let autoRotate = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateImagePositions();
      }, 5000);
      
      // Pause auto rotation when hovering
      card.addEventListener('mouseenter', () => {
        clearInterval(autoRotate);
      });
      
      // Resume auto rotation when mouse leaves
      card.addEventListener('mouseleave', () => {
        autoRotate = setInterval(() => {
          currentIndex = (currentIndex + 1) % totalImages;
          updateImagePositions();
        }, 5000);
      });
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const heroCover = document.querySelector('.hero-cover');
  
    // Start the cover slide after a slight delay (optional)
    setTimeout(() => {
      heroCover.style.right = '0';
    }, 90); // Delay 90ms
  });

// Create the progress bar element and add it to the header
document.addEventListener('DOMContentLoaded', function() {
  // Create a container for the progress bar
  const progressContainer = document.createElement('div');
  progressContainer.classList.add('progress-container');
  
  // Create the progress bar itself
  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');
  
  // Add the progress bar to the container
  progressContainer.appendChild(progressBar);
  
  // Insert the progress container at the bottom of the header
  const header = document.querySelector('header');
  header.appendChild(progressContainer);
  
  // Function to update the progress bar
  function updateProgressBar() {
    // Calculate how far down the page the user has scrolled
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    
    // Update the width of the progress bar
    progressBar.style.width = scrollPercentage + '%';
  }
  
  // Add scroll event listener to update the progress bar
  window.addEventListener('scroll', updateProgressBar);
  
  // Initialize progress bar on page load
  updateProgressBar();
});