const partners = [
    // object to store all the partners 3 at a time.
    // with this we can add new patners directly to this object and it will be autimatically rendered in the browser.
    // status indicates whether the object is shown on website or note (needed for making slider)
    [
        {
            'partnerName': 'USAID',
            'partnerImgSrc': './Images/USAID.webp',
            'status': 'active'
        },
        {
            'partnerName': 'Space Int.',
            'partnerImgSrc': './Images/SpaceInt.webp',
            'status': 'active'
        },
        {
            'partnerName': 'Tineti',
            'partnerImgSrc': './Images/Tineti.webp',
            'status': 'active'
        }
    ],
    [
        {
            'partnerName': 'Tegeta Holding',
            'partnerImgSrc': './Images/Tegeta.webp',
            'status': 'notActive'
        },
        {
            'partnerName': 'Spectre',
            'partnerImgSrc': './Images/Spectre.webp',
            'status': 'notActive'
        },
        {
            'partnerName': 'TBC lisingi',
            'partnerImgSrc': './Images/TBClisingi.webp',
            'status': 'notActive'
        }
    ],
    [
        {
            'partnerName': 'UFC',
            'partnerImgSrc': './Images/UFC.webp',
            'status': 'notActive'
        },
    ],
]

// First we need to create parent element for three partner Logos.
function createParentElementForTripleImgs(id) {
    const elm = `<div class="tripleImgDiv" data-id="${id}"></div>`
    return elm
}
// Secondly, we need to create elements for each partner 
function createPartnerElement(name, ImgSrc){
    const elm = `<div class="partnerImgDiv">
                    <img src="${ImgSrc}" alt="${name}">
                </div>`
    return elm
}
// lastly we need to add parnters from our object to desired html element (which is already created but empty)
function addPartners(Obj, elemAddr){
    let id = 0
    for(const clusterOfPartners of Obj){
        elemAddr.innerHTML += createParentElementForTripleImgs(id)
        for(const partners of clusterOfPartners){
            elemAddr.children[id].classList.add(partners.status) // we have .active class made in css which makes object visible or not.
            elemAddr.children[id].classList.remove('notActive') // removing notActive class from elements because it was just temporary
            elemAddr.children[id].innerHTML += createPartnerElement(partners.partnerName, partners.partnerImgSrc)
        }
        id++;
    }
    
}

addPartners(partners, document.getElementById('partnersListDiv')) // rendering everything
// fucntion to rotate slider automatically
function rotateSlider() {
    const allDivs = document.getElementsByClassName('tripleImgDiv')
    const activeDiv = document.querySelector('.tripleImgDiv.active') 
    const nextActiveDiv = activeDiv.nextElementSibling || allDivs[0]; // if there is no next sibling we need first element

    activeDiv.classList.remove('active') // to make active div not avtive 
    nextActiveDiv.classList.add('active') // to make next not active div avtive 
}

const SLIDER_TIMER = 4500 // intervals for changing slider, (4,5seconds)
let automaticSlider = setInterval(rotateSlider, SLIDER_TIMER); // storing that interval

// function to rotate left slider
function rotateSliderLeft() {
    const allDivs = document.getElementsByClassName('tripleImgDiv')
    const activeDiv = document.querySelector('.tripleImgDiv.active')
    const nextActiveDiv = activeDiv.previousElementSibling || allDivs[allDivs.length-1]; // if pervious sibling does not exist we need last 
    
    activeDiv.classList.remove('active')
    nextActiveDiv.classList.add('active')
}

// function to rotate right slider
function rotateSliderRight() {
    const allDivs = document.getElementsByClassName('tripleImgDiv')
    const activeDiv = document.querySelector('.tripleImgDiv.active')
    const nextActiveDiv = activeDiv.nextElementSibling || allDivs[0];

    activeDiv.classList.remove('active')
    nextActiveDiv.classList.add('active')
}

// we are adding click event listeners to slider arrows
const partnerArrows = document.querySelectorAll('.partnerArrows svg path');
for(const arrow of partnerArrows)
    arrow.addEventListener('click', addEventToArrows)

// fucntion to indicate which arrow is clicked
function addEventToArrows(event) {
    const elementInfo = event.currentTarget.getAttribute('data-dir');
    clearInterval(automaticSlider) // clearing automatically slider timer to make sure this rotates do not overlap
    if (elementInfo === 'left')
        rotateSliderLeft()
    else if(elementInfo === 'right')
        rotateSliderRight()
    automaticSlider = setInterval(rotateSlider, SLIDER_TIMER) // starting timer again
}

// we are adding click event listeners to slider dots
const sliderDots = document.querySelectorAll('#sliderDots svg path')
for(const dot of sliderDots)
    dot.addEventListener('click', addEventToDots)

// function to slide to parents element according to which dot is clicked
function addEventToDots(event){
    const elementInfo = event.currentTarget.getAttribute('data-id'); // every dot has it data-id which is also same as partners divs number
    const allDivs = document.getElementsByClassName('tripleImgDiv')
    const activeDiv = document.querySelector('.tripleImgDiv.active') // get active partners div
    // elementInfo might be 'dot0'
    // elementInfo.length-1 returns only last element in the array which is id of dot
    const nextActiveDiv = allDivs[parseInt(elementInfo[elementInfo.length-1])]; // calulcate who will be next one to activate. 
    
    clearInterval(automaticSlider) // clearing automatically slider timer to make sure this rotates do not overlap
    activeDiv.classList.remove('active')
    nextActiveDiv.classList.add('active')
    automaticSlider = setInterval(rotateSlider, SLIDER_TIMER) // starting timer again
}

// for mobile user so they can swipe and change partners 
const slideContainer = document.getElementById('partnersSliderDiv');
let touchStartX = 0;
let touchEndX = 0;

slideContainer.addEventListener('touchstart', (event) => { // where user started touching
    touchStartX = event.touches[0].clientX;
});

slideContainer.addEventListener('touchmove', (event) => { // where user ended touching
    touchEndX = event.touches[0].clientX;
});

slideContainer.addEventListener('touchend', () => { // calculate distance user was touching
    if(window.innerWidth <= 720) // if user is using small screen device
        handleSlide();
});

function handleSlide() {

    clearInterval(automaticSlider) // clearing automatically slider timer to make sure this rotates do not overlap

    const slideDistance = touchEndX - touchStartX;
    // Set a threshold for the slide distance
    const threshold = 50; // Left to Righ
    const threshold1 = -50; // Righ to Left

    if(slideDistance > threshold) 
        rotateSliderLeft()
    else if(slideDistance < threshold1)
        rotateSliderRight()
    
    automaticSlider = setInterval(rotateSlider, SLIDER_TIMER) // starting timer again
}