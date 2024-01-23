const allQuestions = document.getElementsByClassName('questionTextDiv')
const allAnswers = document.getElementsByClassName('questionAnswer')

for(const question of allQuestions) {
    question.addEventListener('click', () => {
        const answerElement = question.nextElementSibling.children[0]
        const elmArrow = question.children[1].children[0]
        
        if(answerElement.style.maxHeight === '0px' || answerElement.style.maxHeight === ''){
            removeActiveQuestions()
            answerElement.style.maxHeight = answerElement.scrollHeight + 'px'
            answerElement.classList.add('active')
            elmArrow.classList.add('rotateArrow')
        }else {
            answerElement.classList.remove('active')
            elmArrow.classList.remove('rotateArrow')
            answerElement.style.maxHeight = '0'
        }
    })
}

function removeActiveQuestions() {
    for(const ans of allAnswers){
        const allClasses = ans.classList
        for(const className of allClasses){
            if(className === 'active'){
                ans.classList.remove('active')
                ans.parentElement.previousElementSibling.children[1].children[0].classList.remove('rotateArrow')
                ans.style.maxHeight = '0'
                break;
            }
        }
    }
}