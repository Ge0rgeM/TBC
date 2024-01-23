const partners = [
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

function createParentElementForTripleImgs(id) {
    const elm = `<div class="tripleImgDiv" data-id="${id}"></div>`
    return elm
}
function createPartnerElement(name, ImgSrc){
    const elm = `<div class="partnerImgDiv">
                    <img src="${ImgSrc}" alt="${name}">
                </div>`
    return elm
}

function addPartners(Obj, elemAddr){
    let id = 0
    for(const clusterOfPartners of Obj){
        elemAddr.innerHTML += createParentElementForTripleImgs(id)
        for(const partners of clusterOfPartners){
            elemAddr.children[id].classList.add(partners.status)
            elemAddr.children[id].classList.remove('notActive')
            elemAddr.children[id].innerHTML += createPartnerElement(partners.partnerName, partners.partnerImgSrc)
        }
        id++;
    }
    
}

addPartners(partners, document.getElementById('partnersListDiv'))

function rotateSlider() {
    const allDivs = document.getElementsByClassName('tripleImgDiv')
    const activeDiv = document.querySelector('.tripleImgDiv.active')
    const nextActiveDiv = activeDiv.nextElementSibling || allDivs[0];

    activeDiv.classList.remove('active')
    nextActiveDiv.classList.add('active')
}

const SLIDER_TIMER = 4500
let automaticSlider = setInterval(rotateSlider, SLIDER_TIMER);

function rotateSliderLeft() {
    const allDivs = document.getElementsByClassName('tripleImgDiv')
    const activeDiv = document.querySelector('.tripleImgDiv.active')
    const nextActiveDiv = activeDiv.previousElementSibling || allDivs[allDivs.length-1];

    activeDiv.classList.remove('active')
    nextActiveDiv.classList.add('active')
}

function rotateSliderRight() {
    const allDivs = document.getElementsByClassName('tripleImgDiv')
    const activeDiv = document.querySelector('.tripleImgDiv.active')
    const nextActiveDiv = activeDiv.nextElementSibling || allDivs[0];

    activeDiv.classList.remove('active')
    nextActiveDiv.classList.add('active')
}

const partnerArrows = document.querySelectorAll('.partnerArrows svg path');
for(const arrow of partnerArrows){
    arrow.addEventListener('click', addEventToArrows)
}

function addEventToArrows(event) {
    const elementInfo = event.currentTarget.getAttribute('data-dir');
    clearInterval(automaticSlider)
    if (elementInfo === 'left')
        rotateSliderLeft()
    else if(elementInfo === 'right')
        rotateSliderRight()
    automaticSlider = setInterval(rotateSlider, SLIDER_TIMER)
}


const sliderDots = document.querySelectorAll('#sliderDots svg path')
for(const dot of sliderDots){
    dot.addEventListener('click', addEventToDots)
}

function addEventToDots(event){
    const elementInfo = event.currentTarget.getAttribute('data-id');
    const allDivs = document.getElementsByClassName('tripleImgDiv')
    const activeDiv = document.querySelector('.tripleImgDiv.active')
    const nextActiveDiv = allDivs[parseInt(elementInfo[elementInfo.length-1])];
    
    clearInterval(automaticSlider)
    activeDiv.classList.remove('active')
    nextActiveDiv.classList.add('active')
    automaticSlider = setInterval(rotateSlider, SLIDER_TIMER)
}