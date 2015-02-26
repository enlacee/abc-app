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
        LIFE_BASE: 3,
        LIFE_CURRENT: 0,
        
        PATH_AUDIO : '../audio/',
        DOM_BTN_ALPHABET : '.btn',
        DOM_MESSAGE_WIN : '#popup-message-win',
        //DOM_MESSAGE_WIN_POINTS : '#popup-message-win-points',
        
        
        DOM_COUNT_DOWN : '#countdown'        
    };

    var App = {
        urlLocal : vars.URI.protocol() +'://'+ vars.URI.hostname() + vars.URI.path(),
        alphabetPosition : 0,
        // AUDIO
        sm : soundManager,
        mySound : null,
        // static
        pointsValue : 10,
        // timer ID
        countdownTimer : false,

        init : function() {
            console.log("init App");
            this.readAllDataLevel();
            this.renderMyLifes();
            console.log("loading sound");
            this.loadSoundManager2();            
            this.listenerButtonsAlphabet();
            
            
            
            
            
            // init timer
            var myLevel = parseInt(vars.URI.data.level) || 1;
            if (false/*myLevel === 2 || myLevel === 3*/) {
                var seconds = (myLevel === 3) ? 3 : 4; // countDown
                
                this.countdownTimer = setInterval( function() {
                    var remainingSeconds = seconds % 60;
                    console.log('remainingSeconds', remainingSeconds);
                    $(vars.DOM_COUNT_DOWN).text(remainingSeconds);
                    if (seconds === 0) {
                        $(vars.DOM_COUNT_DOWN).text(remainingSeconds);
                        
                        setTimeout(function() {
                            var myIndice = parseInt(vars.URI.data.indice) + 1;
                            var myPoints = parseInt(vars.URI.data.points) || 0;
                            var myTotalPoints = parseInt(vars.URI.data.totalPoints) || 0;
                            vars.URI.query({
                                level : myLevel,
                                indice : myIndice,
                                points: myPoints,
                                totalPoints : myTotalPoints
                            });               
                            vars.URI.data = vars.URI.query(true); 
                            var fileHtml = vars.URI.data.level + '_' + myIndice;
                            console.log('fileHtml');
                            console.log('vars.URI.data', vars.URI.data);
                            
                            App.redirect(fileHtml + '.html?' + vars.URI.query());
                        }, 100);
                        
                    } else {
                        seconds--;
                    }
                    
                }, 1000);
            }
            
            
        },
        // 01 : Get level
        readAllDataLevel : function() {
            vars.URI.data = vars.URI.search(true);            
            //console.log("INIIIIT", vars.URI.search(true));
            
            // load data bootstrap
            var myIndice = parseInt(vars.URI.data.indice) || 0;
            var myPoints = parseInt(vars.URI.data.points) || 0;
            var myTotalPoints = parseInt(vars.URI.data.totalPoints) || 0;
            var myLevel = parseInt(vars.URI.data.level) || -1;
            var life = parseInt(vars.URI.data.life) || vars.LIFE_BASE;
            vars.URI.query({
                level : myLevel,
                indice : myIndice,
                points: myPoints,
                totalPoints : myTotalPoints,
                life : life
            });
            vars.URI.data = vars.URI.query(true);            
            console.log("INIIIIT 2", vars.URI.search(true));
            //App.data = data;
        },
        renderMyLifes : function() {
            
            console.log('LIFE',vars.URI.data.life);
            if (parseInt(vars.LIFE_BASE) === parseInt(vars.URI.data.life)) {
                // nothing
            } else {
            
            var counter = 0;    
            $($(".popup-life-items img").get().reverse()).each(function(index, element) {
                console.log('index', index);
               // vars.URI.data.life = 1;
                
                if (parseInt(vars.URI.data.life) === 2 && counter < 2) {
                    if (element.getAttribute('src') === 'assets/img/life.png') {
                        element.setAttribute('src', 'assets/img/life-off.png');
                        counter = counter +1;
                    }
                    
                } else if (parseInt(vars.URI.data.life) === 1 && counter < 1){
                    if (element.getAttribute('src') === 'assets/img/life.png') {
                        element.setAttribute('src', 'assets/img/life-off.png');
                        counter = counter +1;
                    }
                }

            });    
                
                
            }

          
            
        },        
        
        // cargar los sonidos correspondientes a la pagina
        // Requiere the library soundmanager2
        loadSoundManager2 : function() {
            // step 01
            var stringSound = '';
            $(vars.DOM_BTN_ALPHABET).each(function(index, element) {
                var uriAudio = $(this).attr( "data-audio" ) || '';                
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
        redirect : function(stringFileHtml) {
            window.location.href = vars.URI.protocol() +'://'+ vars.URI.hostname() + vars.URI.directory() + '/' + stringFileHtml;
        },        
        listenerButtonsAlphabet : function() {
            //var event1 = this.isLevel1();
            // LISTENER DESPUES DE CREAR LOS OBJETOS
            $(vars.DOM_BTN_ALPHABET).unbind();
            $(vars.DOM_BTN_ALPHABET).bind('click',function() {
                
                var myLevel = parseInt(vars.URI.data.level) || 1;
                if (myLevel === 1) {
                    getDomButtonCorrect();
                    isLevel1($(this));
                } else if (myLevel === 2) {
                    getDomButtonCorrect();
                    isLevel2($(this));
                } else if (myLevel === 3) {
                    isLevel3($(this));
                }
                
                


            });
            
            // private function Select Correct
            function getDomButtonCorrect() {
                var button = false;
                $(vars.DOM_BTN_ALPHABET).each(function(index, element) {
                    var uriAudio = $(this).attr( "data-audio" ) || '';
                    if (uriAudio.length > 0) {
                        button = element;
                        button.className = button.className + " x-btn-1-green";
                        return false;
                    }
                });
                
                return button;
            }
            
            /*
             * Action Level 1
             * at this level are accumulated all points played
             */
            function isLevel1(el) {
                console.log('App.data ANTES', vars.URI.data);
                var attribute = el.attr('data-audio') || '';
                var myIndice = parseInt(vars.URI.data.indice) || 0;
                var myPoints = parseInt(vars.URI.data.points) || 0;
                var myTotalPoints = parseInt(vars.URI.data.totalPoints) || 0;
                var myLevel = parseInt(vars.URI.data.level) || 1;
                //console.log('attribute', attribute);
                if (attribute.length > 0) {
                    $(vars.DOM_MESSAGE_WIN).fadeIn();  
                    $(vars.DOM_MESSAGE_WIN).find('div').html("100 puntos");
                    //App.mySound.play();                
                    vars.URI.query({
                        level : myLevel,
                        indice : (myIndice + 1),
                        points: App.pointsValue,
                        totalPoints : myTotalPoints + parseInt(App.pointsValue)
                    });
                    vars.URI.data = vars.URI.query(true);
                    console.log("App.data DESPUES", vars.URI.query());
                } else { // WRONG                
                    vars.URI.query({
                        level : myLevel,
                        indice : (myIndice + 1),
                        points: 0,
                        totalPoints : myTotalPoints + 0
                    });
                    vars.URI.data = vars.URI.query(true);
                    console.log("App.data DESPUES", vars.URI.query());
                }
                // redirect
                 setTimeout(function() {
                     var fileHtml = myLevel + '_' + vars.URI.data.indice;
                     App.redirect(fileHtml + '.html?' + vars.URI.query());
                 }, 700);
            }
            
            /*
             * Action Level 2
             */
            function isLevel2(el) {
                console.log('App.data ANTES', vars.URI.data);
                var attribute = el.attr('data-audio') || '';
                var myIndice = parseInt(vars.URI.data.indice) || 0;
                var myPoints = parseInt(vars.URI.data.points) || 0;
                var myTotalPoints = parseInt(vars.URI.data.totalPoints) || 0;
                var myLevel = parseInt(vars.URI.data.level) || 1;
                //console.log('attribute', attribute);
                if (attribute.length > 0) {
                    $(vars.DOM_MESSAGE_WIN).fadeIn();  
                    $(vars.DOM_MESSAGE_WIN).find('div').html("100 puntos");                    
                    //App.mySound.play();                
                    vars.URI.query({
                        level : myLevel,
                        indice : (myIndice + 1),
                        points: App.pointsValue,
                        totalPoints : myTotalPoints + parseInt(App.pointsValue)
                    });
                    vars.URI.data = vars.URI.query(true);
                    console.log("App.data DESPUES", vars.URI.query());
                } else { // WRONG                
                    vars.URI.query({
                        level : myLevel,
                        indice : (myIndice + 1),
                        points: 0,
                        totalPoints : myTotalPoints + 0
                    });
                    vars.URI.data = vars.URI.query(true);
                    console.log("App.data DESPUES", vars.URI.query());
                }
                // redirect
                 setTimeout(function() {
                     var fileHtml = myLevel + '_' + vars.URI.data.indice;
                     App.redirect(fileHtml + '.html?' + vars.URI.query());
                 }, 700);            
            }
            
            /*
             * Action Level 3
             */
            function isLevel3(el) {
                console.log('App.data ANTES', vars.URI.data);
                var attribute = el.attr('data-audio') || '';
                var myIndice = parseInt(vars.URI.data.indice) || 0;
                var myPoints = parseInt(vars.URI.data.points) || 0;
                var myTotalPoints = parseInt(vars.URI.data.totalPoints) || 0;
                var myLevel = parseInt(vars.URI.data.level) || 1;
                //console.log('attribute', attribute);
                if (attribute.length > 0) {
                    getDomButtonCorrect();
                    //App.mySound.play();                
                    vars.URI.query({
                        level : myLevel,
                        indice : (myIndice + 1),
                        points: App.pointsValue,
                        totalPoints : myTotalPoints + parseInt(App.pointsValue)
                    });
                    vars.URI.data = vars.URI.query(true);
                    console.log("App.data DESPUES", vars.URI.query());
                    
                    // redirect
                     setTimeout(function() {
                         var fileHtml = myLevel + '_' + vars.URI.data.indice;
                         App.redirect(fileHtml + '.html?' + vars.URI.query());
                     }, 700); 
                    
                    
                } else { // WRONG                
                    console.log("WRONG", vars.URI.query());
                    
                    var flagredirect = false;
                    $($(".popup-life-items img").get().reverse()).each(function(index, element) {
                        
                        if (element.getAttribute('src') === 'assets/img/life.png') {
                            element.setAttribute('src', 'assets/img/life-off.png');
                            flagredirect = false;
                            return false;
                        } else {
                            flagredirect = true;
                        }
                    });
                    

                    // redirect perdio todas sus vidas
                    if (flagredirect === true) {
                        vars.URI.query({
                             level : myLevel,
                             indice : (myIndice + 1),
                             points: 0,
                             totalPoints : myTotalPoints + 0
                         });
                         vars.URI.data = vars.URI.query(true);

                         setTimeout(function() {
                             var fileHtml = myLevel + '_' + vars.URI.data.indice;
                             App.redirect(fileHtml + '.html?' + vars.URI.query());
                         }, 700);
                    }
                    
                }/* endIF */
           
            }            
            
                       
        },

        // 02 : render vista
        render: function() {
        
        }
    };
    
    // Object Sound building (ready)
    soundManager.onready(function() {
    // soundManager.createSound() etc. may now be called
    //inlinePlayer = new InlinePlayer();
        App.init();
    });
});




