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
        DOM_MESSAGE_WIN : '#popup-message-win',
        PARAM_DOM_TIMER : '#timer'
        
    };

    var App = {
        userName : 'jhon doe',
        level : -1, // default level 1
        //timer : null, // default timeless
        uri : vars.URI,
        data : {
            level : -1,
            indice : 0, // id alphabet
            points : 0, // # de puntos actuales
            
        }, // all data 
        urlLocal : vars.URI.protocol() +'://'+ vars.URI.hostname() + vars.URI.path(),
        alphabetPosition : 0,
        // AUDIO
        sm : soundManager,
        mySound : null,
        pointsValue : 10,
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
            console.log ("LECTURA URI INIT", data);
            console.log (App.level);
            if (parseInt(data.level) > 0) {
                App.level = data.level;
                
                App.data = data;
                App.uri.query(data);
                console.log('f.readAllDataLevel', App.data);
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
        redirectTo : function() {
            window.setTimeout(slowAlert, 1000);
            
            function slowAlert() {
                alert("hi");
                console.log('vars.URI   ',vars.URI.normalizeHash());
              
                window.location.href = vars.URI.protocol() +'://'+ vars.URI.hostname() + vars.URI.path()
                + '?' + App.uri.query();
                
            }
        },        
        
        listenerButtonsAlphabet : function() {
            // LISTENER DESPUES DE CREAR LOS OBJETOS
            $(vars.DOM_BTN_ALPHABET).unbind();
            $(vars.DOM_BTN_ALPHABET).bind('click',function() {
                var attribute = $(this).attr('data-audio');
                
                console.log('App.data ANTES', App.data);
                if (attribute.length > 0) {
                    //App.mySound.play();
                    $(vars.DOM_MESSAGE_WIN).show();
                    
                    // setting URL
                    console.log('App.data ANTES', App.data);
                    vars.URI.query({
                        indice : parseInt(App.data.indice) + 1,
                        points:  parseInt(App.data.points) + parseInt(App.pointsValue)
                    });
                    // update set
                    App.data = vars.URI.query(true);
                    
                    console.log("App.data DESPUES", App.data);
                    
                    App.redirectTo();
                    
                } else {
                    alert("error");
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
    soundManager.onready(function() {
  // soundManager.createSound() etc. may now be called
     //inlinePlayer = new InlinePlayer();
     App.init();
    });
    
    
    
});




