
/*
var AppSound = {
    self : this,
    sound : null,
    
    loadSound : function (stringPathRelativeMP3) {
        var media = new Media(this.cordova_getMediaURL(stringPathRelativeMP3), null, this.cordova_mediaError); 

        this.sound = media; 
    },
    // ------------------ NATIVO ANDROID -------------
    // get path file 
    cordova_getMediaURL: function(s) {
        if (typeof(device) != "undefined") {
            if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
            return s;   
        } else {
            return false;
        }
    },
    cordova_mediaError: function(e) {
        alert('Media Error');
        alert(JSON.stringify(e));
    },
    cordova_callbackAbcMediaStatus: function(e) {
        //alert('estado MEDIA es  ' + JSON.stringify(e));

        if (4 == e) { // Media.MEDIA_STOPPED = 4;
            console.log("End Sound");
        }
    }
}

*/


function AppSound() {
    this.self = this,
    this.sound = null,
    this.loadSound  = function (stringPathRelativeMP3) {
        var media = new Media(this.cordova_getMediaURL(stringPathRelativeMP3), null, this.cordova_mediaError); 
        this.sound = media; 
    },
    this.cordova_getMediaURL =  function(s) {
        if (typeof(device) != "undefined") {
            if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
            return s;   
        } else {
            return false;
        }
    },
    this.cordova_mediaError =  function(e) {
        alert('Media Error');
        alert(JSON.stringify(e));
    },
    this.cordova_callbackAbcMediaStatus = function(e) {
        //alert('estado MEDIA es  ' + JSON.stringify(e));
        if (4 == e) { // Media.MEDIA_STOPPED = 4;
            console.log("End Sound");
        }
    }
            
}



/*
var soundLoser = new AppSound();
soundLoser.loadSound('assets/audio-others/cuando-nopasadenivel.mp3');

var soundWin = new AppSound();
soundWin.loadSound('assets/audio-others/bienvenido.mp3');
*/









