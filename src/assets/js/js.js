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

        urlLocal : vars.URI.protocol() +'://'+ vars.URI.hostname() + vars.URI.path(),
        alphabetPosition : 0,
        // AUDIO
        sm : soundManager,
        mySound : null,
        // static
        pointsValue : 10,

        init : function() {
            console.log("init App");
            this.readAllDataLevel();
            console.log("loading sound");
            this.loadSoundManager2();
            
            this.listenerButtonsAlphabet();

        },
        // 01 : Get level
        readAllDataLevel : function() {
            
            
            vars.URI.data = vars.URI.search(true);
            
console.log("INIIIIT", vars.URI.search(true));
            //App.data = data;
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
        redirect : function(stringFileHtml) {
            
            window.location.href = vars.URI.protocol() +'://'+ vars.URI.hostname() + vars.URI.directory() + '/' + stringFileHtml;
        },
        
        listenerButtonsAlphabet : function() {
            // LISTENER DESPUES DE CREAR LOS OBJETOS
            $(vars.DOM_BTN_ALPHABET).unbind();
            $(vars.DOM_BTN_ALPHABET).bind('click',function() {
                var attribute = $(this).attr('data-audio');
                
                
                if (attribute.length > 0) {
                    //App.mySound.play();
                    //$(vars.DOM_MESSAGE_WIN).show();
                    
                    // PUNTUACION OK
                    console.log('App.data ANTES', vars.URI.data);
                    
                    
                    var myIndice = parseInt(vars.URI.data.indice) || 0;
                    var myPoints = parseInt(vars.URI.data.points) || 0;
                    var myTotalPoints = parseInt(vars.URI.data.totalPoints) || 0;
                    var myLevel = parseInt(vars.URI.data.level) || 1;
                    
                    vars.URI.query({
                        level : myLevel,
                        indice : (myIndice + 1),
                        points: App.pointsValue,
                        totalPoints : myTotalPoints + parseInt(App.pointsValue)
                    });
                    
                    vars.URI.data = vars.URI.query(true);
                    // update set
                
                    console.log("App.data DESPUES", vars.URI.query());
                    
                    
                    setTimeout(function() {
                        var fileHtml = myLevel + '_' + vars.URI.data.indice;
                        App.redirect(fileHtml + '.html?' + vars.URI.query());
                    }, 700);
                } else {
                    console.log("error");
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




