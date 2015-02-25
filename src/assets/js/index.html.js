document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    //document.querySelector("#playMp3").addEventListener("load", playMP3, false);
    playMP3();
};

function playMP3() {
    var mp3URL = getMediaURL("audio/background.mp3");
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