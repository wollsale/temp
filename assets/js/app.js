import '../sass/app.scss';

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


function bodyFade() {
    let b = document.querySelector('body')

    b.style.opacity = '0' ? b.style.opacity = '1' : b.style.opacity = '0'
};

sleep(1000).then(() => {
    bodyFade()
});




(function stringSplit() {
    let w = document.querySelectorAll('.letter__wrapper')

    if(!w) return

    w.forEach(element => {
        let c = element.textContent,
            l = c.split('')

        element.innerHTML = '<span class="letter__item">' + l.join('</span><span class="letter__item">') + '</span>'
    });
})();

function lettersAnimate() {
    let l = document.querySelectorAll('.letter__item')

    for (let i = 0; i < l.length; i++) {
        l[i].style.animation = 'wave .6s ' + i * 0.08 + 's forwards'
    }
};

sleep(4000).then(() => {
    lettersAnimate()
});







(function wordsAnimate() {
    let w = document.querySelectorAll('.word')

    for (let i = 0; i < w.length; i++) {
        const el = w[i]

        sleep(1500 + i * 450).then(() => {
            el.classList.add('word--is-animated')
        })
    }
})();