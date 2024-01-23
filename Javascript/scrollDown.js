const header = document.getElementById('pageHeader');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop === 0){
        header.classList.remove('scrolled-down')
    }else {
        header.classList.add('scrolled-down')
    }
});
