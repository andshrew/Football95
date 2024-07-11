var crowdSound = new Howl({
    src: ['assets/crowd.ogg'],
    loop: true,
    //autoplay: true,
    volume: 0.5,
  });

function playAudio(name) {
    let item = document.getElementById(name);
    try {
        item.currentTime = 0;
        item.play();
    }
    catch {

    }
}

function playLoopedAudio(name) {
    let crowdButton = document.getElementById('crowdtoggle');
    let crowdButtonSmol = document.getElementById('crowdtogglesmol');
    if (crowdSound.playing()) {
        crowdSound.stop()
        crowdButton.innerText = 'Crowd On';
        crowdButtonSmol.innerText = 'Crowd On';
    }
    else {
        crowdSound.play()
        crowdButton.innerText = 'Crowd Off';
        crowdButtonSmol.innerText = 'Crowd Off';
    }
}