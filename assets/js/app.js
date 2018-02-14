import '../sass/app.scss';

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


function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

sleep(1000).then(() => {
    lettersAnimate()
});