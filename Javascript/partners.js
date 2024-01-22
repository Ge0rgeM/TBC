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
            elemAddr.children[id].innerHTML += createPartnerElement(partners.partnerName, partners.partnerImgSrc)
        }
        id++;
    }
    
}

addPartners(partners, document.getElementById('partnersListDiv'))
// let CURRENT_PAGE = 99999

const allDivs = document.getElementsByClassName('tripleImgDiv')
function rotateSlider() {
    const activeDiv = document.querySelector('.tripleImgDiv.active')
    const nextActiveDiv = activeDiv.nextElementSibling || allDivs[0];

    activeDiv.classList.remove('active')
    nextActiveDiv.classList.add('active')
}
setInterval(rotateSlider, 4500);

// function addEventToArrows(event) {
//     let partnersDiv = document.getElementById('partnersListDiv')
//     const elementInfo = event.currentTarget.getAttribute('data-info');
//     if (elementInfo === 'RightArrow'){
//         CURRENT_PAGE++;
//         addPartners(partners[CURRENT_PAGE%3], partnersDiv)
//     }else {
//         CURRENT_PAGE--;
//         addPartners(partners[CURRENT_PAGE%3], partnersDiv)
//     }
// }

// const partnerArrows = document.querySelectorAll('.partnerArrows svg path');
// for(const arrow of partnerArrows){
//     arrow.addEventListener('click', addEventToArrows)
// }


