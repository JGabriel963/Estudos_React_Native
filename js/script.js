const btnGerador = document.getElementById('generate');
const ispinIcon = document.querySelector('.spinner')
const res = document.getElementById('result');
const audio = document.getElementById('audio');
const audioFundo = document.getElementById('audio-fundo');
const audioFundoBtn = document.getElementById('fundo-btn');
let statusBackgroundMusic = false

btnGerador.addEventListener('click', function () {
    audio.play()
    audioFundo.volume = 0.4
    audio.currentTime = 0.1
    res.classList.add('checked');
    ispinIcon.classList.add('spin')
    document.querySelector('#result > span').textContent = "Carregando...";


    setTimeout(() => {
        audio.pause()
        audioFundo.volume = 1
        res.classList.remove('checked');
        const min = parseInt(document.getElementById('min').value)
        const max = parseInt(document.getElementById('max').value)

        let result = Math.floor(Math.random() * (max - min + 1)) + min;

        if (isNaN(result)) {
            document.querySelector('#result > span').textContent = "Preencha todos os campos!";
        } else {
        document.querySelector('#result > span').textContent = result;
        }
    }, 5000)
 
})

function backgroundAudio() {
    if (statusBackgroundMusic === false) {
        audioFundo.play()
        audioFundo.currentTime = 14
        audioFundoBtn.innerHTML = `<i class="fa-solid fa-pause"> </i>`  
        statusBackgroundMusic = true
    } else {
        audioFundo.pause()
        audioFundoBtn.innerHTML = `<i class="fa-solid fa-play"></i>`
        statusBackgroundMusic = false
    }
}

audioFundoBtn.addEventListener('click', backgroundAudio)