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
    if (crowdSound.playing()) {
        crowdSound.stop()
    }
    else {
        crowdSound.play()
    }
}