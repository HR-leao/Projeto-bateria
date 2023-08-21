document.body.addEventListener('keyup', (e)=>{
    playSound(e.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', ()=>{
    let sond = document.querySelector('input').value;
    
    if(sond !== '') {
        let songArray = sond.split('');
        playComposition(songArray);
    }
});








function playSound (sound){ 
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)



    if(audioElement) {

        audioElement.currentTime = 0; // TIRA O DELAY ELE NAO ESPERA UM DETERMINADO TEMPO PARA EXECUTAR A PRÓXIMA TECLA
        audioElement.play();

    };

    if(keyElement) {
        keyElement.classList.add('active');
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300)
    }
};


function playComposition(songArray) {
let wait = 0;


    for (let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`)
        }, wait);

        wait += 250;
    }
}