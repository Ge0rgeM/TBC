const header = document.getElementById('pageHeader');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop === 0){
        header.classList.remove('scrolled-down')
    }else {
        header.classList.add('scrolled-down')
    }
});


let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop && window.innerWidth <= 720 && window.scrollY>1) {
        // Scrolling down, hide the header
        header.classList.add('hidden');
    } else {
        // Scrolling up or not on a small screen, show the header
        header.classList.remove('hidden');
    }

    lastScrollTop = currentScrollTop;
});