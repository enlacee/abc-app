
document.addEventListener('deviceready', function() { validationStartVoice(URI.data); } , false);


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
function validationStartVoice(data) {
    
    if ((27*10) === parseInt(data.totalPoints)) {
        
        if (3 === parseInt(data.level)) {
            var soundMp3 = 'assets/audio-others/muy-bien-final.mp3';
        } else {
            var soundMp3 = 'assets/audio-others/paso-nivel.mp3';
        }
        
        
        if (soundMp3.length > 0) {
            playMP3(soundMp3);
        } 
    } else {
        var soundMp3 = 'assets/audio-others/cuando-nopasadenivel.mp3';
        if (soundMp3.length > 0) {
            playMP3(soundMp3);
        }   
    }

    
}
