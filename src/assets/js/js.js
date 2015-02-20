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
 * Sound manager
 */
soundManager.setup({
    url: 'plugins/soundmanager2/swf/',

    ontimeout: function() {
        alert("Lo sentimos este sonido no se pudo reproducir...");
    }
});


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
        // AUDIO
        sm : soundManager,
        mySound : null,
        points : 0,
        score : 0,

        init : function() {
            console.log("init App");
            this.readAllDataLevel();
            console.log("loading sound");
            this.loadSoundManager2();
            
            this.listenerButtonsAlphabet();

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
        },
        // cargar los sonidos correspondientes a la pagina
        // Requiere the library soundmanager2
        loadSoundManager2 : function() {
            // step 01
            var stringSound = '';
            $(vars.DOM_BTN_ALPHABET).each(function(index, element) {
                var uriAudio = $(this).attr( "data-audio" );
                console.log ('uriAudio', uriAudio);
                if (uriAudio.length > 0) {
                    stringSound = uriAudio;
                    return false;
                }
            });
    
            // step 02
            var urlAudio = stringSound;
            var mySound = App.sm.createSound({
                id: 'some-id-for-your-sound',
                url: urlAudio,
                autoLoad: true,
                autoPlay: false,                
            });
            //mySound.play();
            App.mySound = mySound;            
        },
        
        listenerButtonsAlphabet : function() {
            // LISTENER DESPUES DE CREAR LOS OBJETOS
            $(vars.DOM_BTN_ALPHABET).unbind();
            $(vars.DOM_BTN_ALPHABET).bind('click',function() {
                var attribute = $(this).attr('data-audio');
                
                if (attribute.length > 0) {
                    App.mySound.play();
                } else {
                    alert("error");
                }
                console.log('attribute', attribute);

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
    soundManager.onready(function() {
  // soundManager.createSound() etc. may now be called
     //inlinePlayer = new InlinePlayer();
     App.init();
    });
    
    
    
});




