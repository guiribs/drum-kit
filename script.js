const drumKit = (() => {
    const keys = document.querySelectorAll('.key');

    // Objeto que associa as teclas aos sons
    const sounds = {
        65: 'sounds/clap.wav',
        83: 'sounds/hihat.wav',
        68: 'sounds/kick.wav',
        // Adicione mais sons conforme necessário
    };

    // Função para tocar o som
    const playSound = (keyCode) => {
        const sound = new Audio(sounds[keyCode]);
        sound.play();
    };

    // Função para adicionar a classe 'is-playing'
    const addPlayingClass = (key) => {
        key.classList.add('is-playing');
    };

    // Função para remover a classe 'is-playing'
    const removePlayingClass = (event) => {
        if (event.propertyName !== 'transform') return;
        event.target.classList.remove('is-playing');
    };

    // Função para lidar com o evento de pressionar tecla
    const handleKeyPress = (event) => {
        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
        key ? (playSound(event.keyCode), addPlayingClass(key)) : null;
    };

    // Função para adicionar listeners aos botões
    const addListeners = () => {
        keys.forEach((key) => {
            key.addEventListener('transitionend', removePlayingClass);
            key.addEventListener('click', () => {
                playSound(key.getAttribute('data-key'));
                addPlayingClass(key);
            });
        });
    };

    // Inicializar
    const init = () => {
        window.addEventListener('keydown', handleKeyPress);
        addListeners();
    };

    return {
        init,
    };
})();

drumKit.init();
