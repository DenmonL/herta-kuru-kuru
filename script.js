const audio = new Audio();

let summonBtn = document.querySelector('#summon');
let canvas = document.querySelector('#canvas');
let ctr = document.querySelector('#counter');

let firstClick = true;
let count = 0;

function counter() {
    if (firstClick) {
        firstClick = false;
    }
    count++;
    ctr.innerHTML = count;
}
summonBtn.addEventListener('mousedown', function () {

    counter();

    let kuru = document.createElement('img');
    let sound = document.createElement('audio');

    sound.src = "src/kuru-kuru.mp3";
    sound.type = "audio/mpeg";

    audio.appendChild(sound);
    sound.play();

    kuru.className = 'kuru';
    kuru.src = 'src/kuru-kuru.gif';
    kuru.style.right = "-510px";
    // kuru.style.top = summonBtn.getClientRects()[0].bottom - 730 + "px";

    canvas.appendChild(kuru);


    let limit = window.innerWidth + 510;
    let position = -510;

    let kuruPlay = setInterval(kururin, 12);

    function kururin() {

        if (position >= limit) {
            clearInterval(kuruPlay);
            kuru.remove();
        } else {
            position += 20;
            kuru.style.right = position + "px";
        }

    }
});

window.addEventListener('resize', function () {
    window.resizeTo(screen.width, screen.height)
})