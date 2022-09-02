
// cria constantes que recebem informacoes das imagens
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvem = document.querySelector('.nuvens');

// faz o mario pular
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

// loop em que roda o jogo
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    /* condicao para fim do jogo, se o cano estiver a 120px da borda e o mario nao estiver a 80px de altura o jogo acaba */
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        // faz com que o cano pare o movimento no ponto em que enconsta no mario
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // faz o mario parar na posicao que encosta no cano
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // muda a imagem do mario para imagem do mario game over
        mario.src = 'images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // muda a imagem das nuvens para a imagem de game over
        nuvem.src = 'images/perdeu.png';
        nuvem.style.width = '350px';
        nuvem.style.animation = 'none';
        nuvem.style.marginLeft = '40%';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);