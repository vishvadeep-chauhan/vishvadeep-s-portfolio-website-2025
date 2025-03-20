"use strict";

/*
 * ================================================================
 * DIGITAL FINGERPRINT
 * ================================================================
 * Website: Vishvadeep Singh Chauhan's Portfolio
 * Author: Vishvadeep Singh Chauhan
 * Contact: vishvadeep2024@gmail.com
 * Copyright © 2024 Vishvadeep Singh Chauhan. All rights reserved.
 *
 * This website, including its code, design, assets, and content,
 * is the exclusive property of Vishvadeep Singh Chauhan.
 * Unauthorized reproduction, distribution, or use of this website
 * or any part of it is strictly prohibited and will be prosecuted
 * to the fullest extent of the law.
 *
 * Unique Fingerprint ID: VSC-PORTFOLIO-2025-8865966009
 * ================================================================
 */

//Opening or closing side bar

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Set sidebar to be always visible
sidebar.classList.add("active");

// Hide the toggle button since we want contacts to be always visible
sidebarBtn.style.display = "none";

// Ensure sidebar has appropriate height for content
function adjustSidebarHeight() {
  if (window.innerWidth >= 1250) {
    sidebar.style.height = "auto";
    sidebar.style.maxHeight = "none";
  }
}

// Run on page load
window.addEventListener("DOMContentLoaded", adjustSidebarHeight);

// Run on window resize
window.addEventListener("resize", adjustSidebarHeight);

// Function to toggle element classes
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

//Activating Modal-testimonial

const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

//Activating close button in modal-testimonial

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

//Activating Filter Select and filtering options

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue == "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue == filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

//Enabling filter button for larger screens

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// Enabling Contact Form

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Enabling Page Navigation

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() == pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Custom Cursor Implementation
const customCursor = document.querySelector(".custom-cursor");
const cursorDot = document.querySelector(".cursor-dot");
const body = document.body;

// Enable custom cursor for all devices
// Add cursor-active class to body
body.classList.add("custom-cursor-active");

// Position cursor on mouse move with requestAnimationFrame for better performance
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const cursorSpeed = 0.2; // Controls how quickly the main cursor follows the mouse

// Function to adjust cursor size based on screen width
function adjustCursorSize() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 480) {
    // Small screens
    customCursor.style.width = "12px";
    customCursor.style.height = "12px";
    cursorDot.style.width = "2px";
    cursorDot.style.height = "2px";
  } else if (screenWidth <= 768) {
    // Medium screens
    customCursor.style.width = "15px";
    customCursor.style.height = "15px";
    cursorDot.style.width = "3px";
    cursorDot.style.height = "3px";
  } else {
    // Large screens
    customCursor.style.width = "20px";
    customCursor.style.height = "20px";
    cursorDot.style.width = "5px";
    cursorDot.style.height = "5px";
  }
}

// Initial size adjustment
adjustCursorSize();

// Adjust cursor size on window resize
window.addEventListener("resize", adjustCursorSize);

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Small dot follows cursor exactly
  cursorDot.style.top = `${mouseY}px`;
  cursorDot.style.left = `${mouseX}px`;
});

// Smooth cursor movement with animation frame
function updateCursor() {
  // Calculate new position with smooth follow effect
  cursorX += (mouseX - cursorX) * cursorSpeed;
  cursorY += (mouseY - cursorY) * cursorSpeed;

  // Apply position to the main cursor
  customCursor.style.top = `${cursorY}px`;
  customCursor.style.left = `${cursorX}px`;

  requestAnimationFrame(updateCursor);
}
updateCursor();

// Add hover effect for interactive elements
const interactiveElements = document.querySelectorAll(
  "a, button, .icon-box, .download-resume-btn, input, textarea"
);

interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 480) {
      customCursor.style.width = "25px";
      customCursor.style.height = "25px";
    } else if (screenWidth <= 768) {
      customCursor.style.width = "30px";
      customCursor.style.height = "30px";
    } else {
      customCursor.style.width = "40px";
      customCursor.style.height = "40px";
    }

    customCursor.style.backgroundColor = "rgba(250, 217, 97, 0.4)";
    cursorDot.style.transform = "translate(-50%, -50%) scale(2)";
  });

  element.addEventListener("mouseleave", () => {
    adjustCursorSize(); // Reset to default size based on screen
    customCursor.style.backgroundColor = "rgba(250, 217, 97, 0.7)";
    cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
  });
});

// Hide cursor when it leaves the window
document.addEventListener("mouseout", (e) => {
  if (e.relatedTarget === null) {
    customCursor.style.display = "none";
    cursorDot.style.display = "none";
  }
});

document.addEventListener("mouseover", () => {
  customCursor.style.display = "block";
  cursorDot.style.display = "block";
});

// Add subtle pulse animation on click
document.addEventListener("mousedown", () => {
  customCursor.style.transform = "translate(-50%, -50%) scale(0.8)";
  cursorDot.style.transform = "translate(-50%, -50%) scale(0.8)";
});

document.addEventListener("mouseup", () => {
  customCursor.style.transform = "translate(-50%, -50%) scale(1)";
  cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
});

// Special handling for touch devices
if (
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0
) {
  // Add touch event support
  document.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    mouseX = touch.clientX;
    mouseY = touch.clientY;

    // Show cursor briefly at touch point
    customCursor.style.display = "block";
    cursorDot.style.display = "block";

    // Animate touch effect
    customCursor.style.transform = "translate(-50%, -50%) scale(0.8)";
    cursorDot.style.transform = "translate(-50%, -50%) scale(0.8)";

    // Hide cursor after delay
    setTimeout(() => {
      customCursor.style.display = "none";
      cursorDot.style.display = "none";
    }, 1000);
  });

  document.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    mouseX = touch.clientX;
    mouseY = touch.clientY;
  });
}

// Water Bubble Splash Animation
function createWaterSplash() {
  const splashContainer = document.querySelector(".water-splash-container");
  const mainBubble = document.querySelector(".water-bubble");

  // Add ripple effect to main bubble
  function addRippleEffect() {
    for (let i = 0; i < 3; i++) {
      const ripple = document.createElement("div");
      ripple.style.position = "absolute";
      ripple.style.top = "50%";
      ripple.style.left = "50%";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.width = "10px";
      ripple.style.height = "10px";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "transparent";
      ripple.style.border = "2px solid rgba(250, 217, 97, 0.5)";
      ripple.style.boxShadow = "0 0 10px rgba(250, 217, 97, 0.3)";
      ripple.style.zIndex = "999";

      // Set animation with staggered delays
      const delay = i * 0.3;
      ripple.style.animation = `rippleEffect 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) ${delay}s`;

      splashContainer.appendChild(ripple);
    }
  }

  // Add ripple effect keyframe to document
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes rippleEffect {
      0% {
        width: 10px;
        height: 10px;
        opacity: 1;
        border-width: 2px;
      }
      100% {
        width: 300px;
        height: 300px;
        opacity: 0;
        border-width: 1px;
      }
    }
  `;
  document.head.appendChild(styleSheet);

  // Create splash droplets
  function createDroplets() {
    // Increase number of droplets for more dramatic effect
    const dropletCount = 40;

    for (let i = 0; i < dropletCount; i++) {
      const droplet = document.createElement("div");
      droplet.classList.add("splash-droplet");

      // Random size between 5px and 60px
      const size = 5 + Math.random() * 55;
      droplet.style.width = `${size}px`;
      droplet.style.height = `${size}px`;

      // Position droplets in the center initially
      droplet.style.top = "50%";
      droplet.style.left = "50%";

      // Random direction and distance
      const angle = Math.random() * Math.PI * 2; // Random angle in radians
      const distance = 30 + Math.random() * 100; // Increase max distance
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      // Random scale for animation
      const scale = 0.5 + Math.random() * 2;

      // Random animation duration between 1.2s and 3s
      const duration = 1.2 + Math.random() * 1.8;

      // Randomized delay for more natural effect
      const delay = 0.3 + Math.random() * 0.8;

      // Add slight rotation
      const rotation = -20 + Math.random() * 40;

      // Set CSS variables for the animation
      droplet.style.setProperty("--tx", `${tx}vw`);
      droplet.style.setProperty("--ty", `${ty}vh`);
      droplet.style.setProperty("--scale", scale);
      droplet.style.setProperty("--rotation", `${rotation}deg`);

      // Set animation properties
      droplet.style.animation = `dropletSplash ${duration}s ease-out ${delay}s forwards`;

      // Add to container
      splashContainer.appendChild(droplet);
    }
  }

  // Add ripple effect
  addRippleEffect();

  // Create the droplets after a short delay
  setTimeout(createDroplets, 300);

  // Add subtle page shake effect when bubble bursts
  setTimeout(() => {
    document.body.style.animation =
      "shakeEffect 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both";

    // Add shake animation keyframes
    const shakeStyle = document.createElement("style");
    shakeStyle.textContent = `
      @keyframes shakeEffect {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
        20%, 40%, 60%, 80% { transform: translateX(2px); }
      }
    `;
    document.head.appendChild(shakeStyle);

    // Remove animation after it completes
    setTimeout(() => {
      document.body.style.animation = "";
    }, 500);
  }, 600); // Timed to match when bubble starts to grow rapidly

  // Remove the splash container after animation completes
  setTimeout(() => {
    splashContainer.style.display = "none";
  }, 3500);
}

// Add cursor bubble trail effect
function initCursorBubbleTrail() {
  const cursorBubbleContainer = document.createElement("div");
  cursorBubbleContainer.classList.add("cursor-bubble-container");
  cursorBubbleContainer.style.position = "fixed";
  cursorBubbleContainer.style.top = "0";
  cursorBubbleContainer.style.left = "0";
  cursorBubbleContainer.style.width = "100%";
  cursorBubbleContainer.style.height = "100%";
  cursorBubbleContainer.style.pointerEvents = "none";
  cursorBubbleContainer.style.zIndex = "9998";
  cursorBubbleContainer.style.overflow = "hidden";
  document.body.appendChild(cursorBubbleContainer);

  // Create bubble trail style
  const bubbleStyle = document.createElement("style");
  bubbleStyle.textContent = `
    .cursor-bubble {
      position: absolute;
      background: radial-gradient(
        circle at center,
        rgba(250, 217, 97, 0.8) 0%,
        rgba(250, 217, 97, 0.5) 40%,
        rgba(250, 217, 97, 0) 80%
      );
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      animation: bubbleFloat 1.5s ease-out forwards;
    }
    @keyframes bubbleFloat {
      0% {
        opacity: 0.7;
        transform: translate(-50%, -50%) scale(1);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) translate(0, -50px) scale(1.5);
      }
    }
  `;
  document.head.appendChild(bubbleStyle);

  // Create bubbles on mouse move
  let lastBubbleTime = 0;
  document.addEventListener("mousemove", (e) => {
    const currentTime = Date.now();

    // Limit bubble creation to every 150ms to avoid too many bubbles
    if (currentTime - lastBubbleTime > 150) {
      lastBubbleTime = currentTime;

      // Create bubble
      const bubble = document.createElement("div");
      bubble.classList.add("cursor-bubble");

      // Random size between 5px and 15px
      const size = 5 + Math.random() * 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Position at cursor
      bubble.style.left = `${e.clientX}px`;
      bubble.style.top = `${e.clientY}px`;

      // Append to container
      cursorBubbleContainer.appendChild(bubble);

      // Remove bubble after animation completes
      setTimeout(() => {
        if (bubble && bubble.parentNode) {
          bubble.parentNode.removeChild(bubble);
        }
      }, 1500);
    }
  });
}

// Run the water splash animation and initialize cursor bubbles when the page loads
window.addEventListener("DOMContentLoaded", function () {
  createWaterSplash();
  initCursorBubbleTrail();

  // Run other initialization code
  adjustSidebarHeight();
});
