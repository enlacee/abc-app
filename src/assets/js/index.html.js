document.addEventListener('deviceready', validationStartVoice, false);

function onDeviceReady() {
    //document.querySelector("#playMp3").addEventListener("load", playMP3, false);
    var soundMp3 = '';
    if (soundMp3.length > 0) {
        playMP3(soundMp3);
    } else {
        console.log('no sound!');
    }
};

function playMP3(myPathFileMp3) {
    var mp3URL = getMediaURL(myPathFileMp3);
    var media = new Media(mp3URL, null, mediaError);
    media.play();
}

function getMediaURL(s) {
    if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
    return s;
}

function mediaError(e) {
    alert('Media Error');
    alert(JSON.stringify(e));
}


// function validation of voice to Start
function validationStartVoice() {

    var flag = sessionStorage.getItem('voiceStart');
    if (typeof(flag) == 'object' && flag == null) {
        var soundMp3 = 'assets/audio-others/bienvenido.mp3';
        if (soundMp3.length > 0) {
            playMP3(soundMp3);
            sessionStorage.setItem('voiceStart', true);
        }
    }
    
}