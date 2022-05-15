/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./packages/hydefront/hyde.ts ***!
  \************************************/
/**
 * Core Scripts for the HydePHP Frontend
 *
 * @package     HydePHP - HydeFront
 * @version     v1.7.x (HydeFront)
 * @author      Caen De Silva
 */
var mainNavigationLinks = document.getElementById("main-navigation-links");
var openMainNavigationMenuIcon = document.getElementById("open-main-navigation-menu-icon");
var closeMainNavigationMenuIcon = document.getElementById("close-main-navigation-menu-icon");
var navigationToggleButton = document.getElementById("navigation-toggle-button");
var themeToggleButtons = document.querySelectorAll(".theme-toggle-button");
var navigationOpen = false;
/**
 * Navigation Interactions
 */

function toggleNavigation() {
  if (navigationOpen) {
    hideNavigation();
  } else {
    showNavigation();
  }
}

function showNavigation() {
  mainNavigationLinks.classList.remove("hidden");
  openMainNavigationMenuIcon.style.display = "none";
  closeMainNavigationMenuIcon.style.display = "block";
  navigationOpen = true;
}

function hideNavigation() {
  mainNavigationLinks.classList.add("hidden");
  openMainNavigationMenuIcon.style.display = "block";
  closeMainNavigationMenuIcon.style.display = "none";
  navigationOpen = false;
}
/**
 * Theme Toggle
 */


function toggleTheme() {
  if (isSelectedThemeDark()) {
    setThemeToLight();
  } else {
    setThemeToDark();
  }

  function isSelectedThemeDark() {
    return localStorage.getItem('color-theme') === 'dark' || !('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function setThemeToDark() {
    document.documentElement.classList.add("dark");
    localStorage.setItem('color-theme', 'dark');
  }

  function setThemeToLight() {
    document.documentElement.classList.remove("dark");
    localStorage.setItem('color-theme', 'light');
  }
} // Register onclick event listener for themeToggleButtons


themeToggleButtons.forEach(function (button) {
  button.addEventListener("click", toggleTheme);
}); // Register onclick event listener for navigation toggle button if it exists

if (navigationToggleButton) {
  navigationToggleButton.onclick = toggleNavigation;
}
/**
 * Lagrafo Frontend Scripts
 * @version v0.2.0-beta
 */


if (document.getElementById("lagrafo-app")) {
  var toggleSidebar = function toggleSidebar() {
    sidebarOpen_1 ? closeSidebar() : openSidebar();

    function openSidebar() {
      sidebarOpen_1 = true;
      sidebar_1.classList.add('active');
      sidebarToggleButton_1.classList.add('active');
      createBackdropElement();
    }

    function closeSidebar() {
      sidebarOpen_1 = false;
      sidebar_1.classList.remove('active');
      sidebarToggleButton_1.classList.remove('active');
      removeBackdropElement();
    }

    function createBackdropElement() {
      backdrop_1.id = 'sidebar-backdrop';
      backdrop_1.title = 'Click to close sidebar';
      backdrop_1.classList.add('backdrop');
      backdrop_1.classList.add('active');
      backdrop_1.addEventListener('click', closeSidebar);
      document.body.appendChild(backdrop_1);
      document.getElementById('content').classList.add('sidebar-active');
    }

    function removeBackdropElement() {
      if (backdrop_1.parentNode) {
        backdrop_1.parentNode.removeChild(backdrop_1);
      }

      document.getElementById('content').classList.remove('sidebar-active');
    }
  }; // On click of sidebar toggle button


  var sidebarOpen_1 = false;
  var sidebarToggleButton_1 = document.getElementById('sidebar-toggle');
  var sidebar_1 = document.getElementById('sidebar');
  var backdrop_1 = document.createElement('div');
  sidebarToggleButton_1.addEventListener('click', function () {
    toggleSidebar();
  }); // If sidebar is open, close it on escape key press

  document.addEventListener('keydown', function (e) {
    if (sidebarOpen_1 && e.key === 'Escape') {
      toggleSidebar();
    }
  });
}
/******/ })()
;