// Code to open and close mobile navigation menu
const menuContainer = document.getElementById('mobileNavigationListMenu');
const menuIcon = document.getElementById('mobileNavigationMenuDiv');
const headerWrapper = document.getElementById('pageHeader');
const body = document.body;

function toggleMenu(element) {
    element.classList.toggle('menuActive'); // adding or removing .menuActive class from parent element

    if (menuContainer.style.right === '0%') {
        menuContainer.style.right = '-60%'; // closign container menu
        body.style.overflow = 'auto'; // Enable scrolling
        headerWrapper.classList.add('scrolled-down') // we are adding .scrolled-down class to header again so it's opacity changes accordingly
    } else {
        menuContainer.style.right = '0%'; // opening conatiner menu
        body.style.overflow = 'hidden'; // Disable scrolling
        headerWrapper.classList.remove('scrolled-down')// we are removing .scrolled-down class from header so it's opacity comes back to 1 if website is scrolled down and menu is open same time.
    }
}
// event listener for clicking outside the opened menu container
document.addEventListener('click', function(event) {
    const isClickInsideDiv = menuContainer.contains(event.target);
    const isClickInsideMenuIcon = menuIcon.contains(event.target);
    if (!isClickInsideDiv && !isClickInsideMenuIcon && menuContainer.style.right === '0%' && window.innerWidth <= 720) {
        // if user has not clicked inside the container menu
        // if user has not clicked directly on closing/opening menu icon (to not close twice)
        // if menu container is opened
        // if window size is less than 721 (in other case we don't have mobile navigation)
        toggleMenu(menuIcon)
    }
});