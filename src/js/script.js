const dotItem = document.querySelectorAll('.statistic__circles_item'),
    sliderItem = document.querySelectorAll('.statistic__percents__item'),
    questionCards = document.querySelectorAll('.dropCard'),
    answerCards = document.querySelectorAll('.downCard'),
    slider = document.querySelector('.statistic__percents')

dotItem.forEach((item, i) => {
    item.addEventListener('click', () => {
        item.classList.add('active')
        console.log(item.id)
        const dotNum = +item.id
        dotItem.forEach(items => {
            if (items !== item) {
                items.classList.remove('active')
            }
        })
        sliderItem.forEach((elem,i) => {
            elem.classList.add('hide')
            if (i === dotNum-1) {
                elem.classList.remove('hide')
            }
            if (i === dotNum) {
                elem.classList.remove('hide')
            }
            if (i === dotNum+1) {
                elem.classList.remove('hide')
            }
        })
    })
})

questionCards.forEach(queitem => {
    queitem.addEventListener('click',() => {
        queitem.classList.add('hide')
        const queID = queitem.id.slice(-1)
        console.log(queitem)
        answerCards.forEach(elem => {
            if(queID === elem.id.slice(-1)){
                elem.classList.remove('hide')
            }
        })
    })
})

answerCards.forEach(ansitem => {
    ansitem.addEventListener('click',() => {
        ansitem.classList.add('hide')
        const queID = ansitem.id.slice(-1)
        console.log(ansitem)
        questionCards.forEach(elem => {
            if(queID === elem.id.slice(-1)){
                elem.classList.remove('hide')
            }
        })
    })
})




