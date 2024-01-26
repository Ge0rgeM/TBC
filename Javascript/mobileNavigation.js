const menuContainer = document.getElementById('mobileNavigationListMenu');
const menuIcon = document.getElementById('mobileNavigationMenuDiv');
const headerWrapper = document.getElementById('pageHeader');
const body = document.body;

function toggleMenu(element) {
    element.classList.toggle('menuActive');

    if (menuContainer.style.right === '0%') {
        menuContainer.style.right = '-60%';
        body.style.overflow = 'auto'; // Enable scrolling
        headerWrapper.classList.add('scrolled-down')
    } else {
        menuContainer.style.right = '0%';
        body.style.overflow = 'hidden'; // Disable scrolling
        headerWrapper.classList.remove('scrolled-down')
    }
}
document.addEventListener('click', function(event) {
    const isClickInsideDiv = menuContainer.contains(event.target);
    const isClickInsideMenuIcon = menuIcon.contains(event.target);
    if (!isClickInsideDiv && !isClickInsideMenuIcon && menuContainer.style.right === '0%' && window.innerWidth <= 720) {
        toggleMenu(menuIcon)
    }
});