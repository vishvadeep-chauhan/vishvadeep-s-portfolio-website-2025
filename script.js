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
