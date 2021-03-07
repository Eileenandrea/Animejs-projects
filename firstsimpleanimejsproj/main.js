let playPause =anime({
    targets: 'div.box',
    translateY: [
        { value: 200, duration: 500 },
        {value:0, duration:800}
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine',
    },
    delay: function (el, i, l) { return i * 1000 },
    autoplay: false
})

let playbtn = document.querySelector('.play');
let pausebtn = document.querySelector('.pause');
playbtn.onclick = playPause.play;
pausebtn.onclick = playPause.pause;