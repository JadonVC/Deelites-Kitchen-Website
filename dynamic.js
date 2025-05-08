'use strict';

// Carousel Code

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

const carouselItems = Array.from(document.querySelectorAll('.carousel-item')); 
const navItems = Array.from(document.querySelectorAll('.nav-item')); 
const CAROUSEL_SIZE = carouselItems.length;

leftBtn.addEventListener('click', swipe);
rightBtn.addEventListener('click', swipe);

// Add event delegation to the carousel-nav container
const carouselNav = document.querySelector('.carousel-nav');
carouselNav.addEventListener('click', handleNavClick);

function handleNavClick(e) {
  // Check if the clicked element is a nav-item
  if (!e.target.classList.contains('nav-item')) return;
  
  const clickedNavItem = e.target;
  const currentIndex = navItems.indexOf(clickedNavItem);
  
  // If the clicked nav item is already active, do nothing
  if (clickedNavItem.classList.contains('active')) return;
  
  // Get the current active items
  const currentCarouselItem = document.querySelector('.carousel-item.active');
  const currentNavItem = document.querySelector('.nav-item.active');
  
  // Remove active class from current items
  currentCarouselItem.classList.remove('active');
  currentNavItem.classList.remove('active');
  
  // Add active class to the clicked nav item and corresponding carousel item
  clickedNavItem.classList.add('active');
  carouselItems[currentIndex].classList.add('active');
}

function swipe(e){
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);

    let nextIndex;

    if (e.currentTarget.classList.contains('left')) {
        if (currentIndex === 0) {
            nextIndex = CAROUSEL_SIZE - 1;
        }
        else {
            nextIndex = currentIndex - 1;
        }
    }
    else {
        if (currentIndex === CAROUSEL_SIZE - 1) {
            nextIndex = 0;
        }
        else {
            nextIndex = currentIndex + 1;
        }
    }

    carouselItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
    currentCarouselItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');
}



document.addEventListener("DOMContentLoaded", function () {

    /* Dynamic Year in Footer*/
    const yearElement = document.getElementById('dynamic-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    //Typewriter code
    const typewriterElement = document.getElementById('typewriter');
    
    // Set the typing animation and blinking effect initially
    typewriterElement.style.animation = "typing 4s steps(20) 1s forwards, blink 0.75s step-end infinite";
  
    // After the typing is done (4 seconds), stop the blinking animation
    setTimeout(function() {
      // Stop the blinking by removing it from the animation
      typewriterElement.style.animation = "typing 4s steps(20) 1s forwards"; // Only typing animation now
      
      // Remove the cursor (border-right) after typing is complete
      typewriterElement.style.borderRight = "none";
    }, 4000); // Stop blinking after 4 seconds (when typing ends)
  });
  

