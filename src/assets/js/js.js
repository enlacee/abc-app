/*
* Javascript
*
* Subject : Handle URL (sending data in local)
*
*
* get data map:
* uri.search(true); // returns { foo: "bar", hello : ["world", "mars"] }
*/

/**
 * 
 */

$(function(){
    
    var vars = {
        CONTENTSLOT : "#contentSlot",
        ALPHABET : [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m',
            'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        URI : new URI(location.href),
        PATH_AUDIO : '../audio/',

        DOM_BTN_ALPHABET : '.btn',
        PARAM_DOM_TIMER : '#timer'
        
    };

    var App = {
        userName : 'jhon doe',
        level : -1, // default level 1
        //timer : null, // default timeless
        dataUri : {}, // all data 
        alphabetPosition : 0,
        mySound : null,
        points : 0,
        score : 0,

        init : function() {
            console.log("init App");
            this.readAllDataLevel();
            console.log("loading sound");
            this.loadSoundManager2();

        },
        // 01 : Get level
        readAllDataLevel : function() {
            var uri = vars.URI;
            var data = uri.search(true);
            // read all data when is send by http
            if (parseInt(data.level) > 0) {
                App.level = data.level;
                App.dataUri = data;
            }
            console.log('App.level', App.level);
            console.log('data',data);

        },
        // cargar los sonidos correspondientes a la pagina
        // Requiere the library soundmanager2
        loadSoundManager2 : function(uriAudioMp3) {
            // step 01
            var stringSound = '';
            $( vars.DOM_BTN_ALPHABET ).each(function(index, element) {
                var uriAudio = $( this ).attr( "data-audio" );
                console.log ('uriAudio', uriAudio);
                if (uriAudio.length > 0) {
                    stringSound = uriAudio;
                    return false;
                }
            });
    
            // step 02
            soundManager.setup({
                url: 'plugins/soundmanager2/swf/',
                    onready: function(stringSound) {
                        /*var mySound = soundManager.createSound({
                            id: 'aSound',
                            url: 'assets/audio/avion.mp3'
                        });
                        mySound.play();*/
                        
                        console.log('LOGG', vars.PATH_AUDIO);
                        
                        console.log('PATH domain', vars.URI.domain());
                        console.log('PATH URI', vars.URI.directory());
                        console.log('stringSoundstringSound X', stringSound);
                        var urlAudio = vars.URI.domain() + vars.URI.directory() + '/' + stringSound;
                        console.log('urlAudio', urlAudio);
                        /*
                        var mySound = soundManager.createSound({
                            id: 'aSound',
                            url: vars.PATH_AUDIO +  stringSound
                        });
                        mySound.play();*/
                        
                        //App.mySound = arrayUriSound[0];
                        
                        
                    },
                    ontimeout: function() {
                        alert("Lo sentimos este sonido no se pudo reproducir.");
                    }
            });
        },
        // 02 : render vista
        render: function() {
        
        },
        //
        isLevel1: function() {
        

        },
        islevel2: function() {
            

        },
        isLevel3: function() {
            

        }
    };
    
    //
    
    App.init();
    
    
});




