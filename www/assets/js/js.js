/*
* Javascript
*
* Subject : Handle URL (sending data in local)
*
*
* get data map:
* uri.search(true); // returns { foo: "bar", hello : ["world", "mars"] }
*/
/*+++++++++++++++++ ADD CUSTOM +++++++++++++*/
/*      background force to jquery-mobile  */
/*document.getElementById('page1').style.backgroundColor = "#83e749";
document.body.style.backgroundColor = "#83e749";*/

$( window ).on( "orientationchange", function( event ) {
    setTimeout(function(){
        $.mobile.loading('show');
    },100);

    $( "header" ).fadeOut( 1, function() {
        setTimeout(function(){
            $( "header" ).fadeIn();
            $.mobile.loading('hide');
        },2000);
    });
});
/*+++++++++++++++++ ADD CUSTOM +++++++++++++*/



/*$(function(){*/

    var vars = {
        CONTENTSLOT : "#contentSlot",
        ALPHABET : [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m',
            'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        URI : new URI(location.href),
        URIdata : {level : 0, indice : 0, points : 0, totalPoints : 0, timerForLevel : 0},
        LIFE_BASE: 3,
        LIFE_CURRENT: 0,
        TIMER_FOR_LEVEL: 0,
        
        DOM_BTN_ALPHABET : '.btn',
        DOM_MESSAGE_WIN : '#popup-message-win',
        //DOM_MESSAGE_WIN_POINTS : '#popup-message-win-points',
        DOM_COUNT_DOWN : '#countdown',
        DOM_BTN_RESTART: '.popup-restart',
        
        DOM_FOOTER : '.content-footer',
    };

    var App = {
        urlLocal : vars.URI.protocol() +'://'+ vars.URI.hostname() + vars.URI.path(),
        self : this,
        alphabetPosition : 0,
        // AUDIO
        mySoundWrong : null,
        mySoundCorrect : null,
        // static
        pointsValue : 10,
        // timer ID
        countdownTimer : false,
        timerForLevel : 0,

        init : function() {
            console.log("readAllDataLevel()");
            this.readAllDataLevel();
            this.rebuildDomView();
            this.renderMyLifes();
            console.log("loadSoundManager2()");
            this.loadSoundManager2();            
            this.listenerButtonsAlphabet();
            this.initTimerInBackground();
            
            
            
            
            
            // init timer
            var myLevel = parseInt(vars.URIdata.level) || 1;
            if (myLevel === 2 || myLevel === 3) {
                var seconds = (myLevel === 3) ? 15 : 30; // countDown
                
                self.countdownTimer = setInterval( function() {
                    var remainingSeconds = seconds % 60;
                    console.log('remainingSeconds', remainingSeconds);
                    $(vars.DOM_COUNT_DOWN).text(remainingSeconds);
                    if (seconds === 0) {
                        $(vars.DOM_COUNT_DOWN).text(remainingSeconds);
                        
                        setTimeout(function() {
                            var myIndice = parseInt(vars.URIdata.indice) + 1;
                            var myPoints = parseInt(vars.URIdata.points) || 0;
                            var myTotalPoints = parseInt(vars.URIdata.totalPoints) || 0;
                            var life = parseInt(vars.URIdata.life) || vars.LIFE_BASE;

                            vars.URIdata.indice = myIndice;
                            vars.URIdata.level = myLevel;
                            vars.URIdata.points = myPoints;
                            vars.URIdata.totalPoints = myTotalPoints;
                            vars.URIdata.life = life; //(life - 1); alert('vars.URIdata.life '+vars.URIdata.life) // si llegaste aqui pierdes 1 vida.
                            vars.URI.query(vars.URIdata);

                            var fileHtml = vars.URIdata.level + '_' + myIndice;
                            console.log('fileHtml', fileHtml);
                            console.log('vars.URIdata', vars.URIdata);
                            
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
            // get data 01
            vars.URIdata = vars.URI.search(true);
            
            // load data bootstrap
            var myIndice = parseInt(vars.URIdata.indice) || 0;
            var myPoints = parseInt(vars.URIdata.points) || 0;
            var myTotalPoints = parseInt(vars.URIdata.totalPoints) || 0;
            var myLevel = parseInt(vars.URIdata.level) || -1;
            var life = parseInt(vars.URIdata.life) || vars.LIFE_BASE;
            // get data 02  
            //vars.URIdata = vars.URI.query(true);
            vars.URIdata.indice = myIndice;
            vars.URIdata.level = myLevel;
            vars.URIdata.points = myPoints;
            vars.URIdata.totalPoints = myTotalPoints;
            vars.URIdata.life = life;
            vars.URIdata.timerForLevel = this.initTimerGetValueInitial();
            
            vars.URI.query(vars.URIdata);
            
            console.log("INIT");
            console.log(vars.URIdata);
            //App.data = data;
        },
        renderMyLifes : function() {
            
            console.log('LIFE',vars.URIdata.life);
            if (parseInt(vars.LIFE_BASE) === parseInt(vars.URIdata.life)) {
                // nothing
            } else {
                var counter = 0;    
                $($(".popup-life-items img").get().reverse()).each(function(index, element) {
                    console.log('index', index);
                   // vars.URIdata.life = 1;

                    if (parseInt(vars.URIdata.life) === 2 && counter < (vars.LIFE_BASE-vars.URIdata.life)) { // 3-2
                        if (element.getAttribute('src') === 'assets/img/life.png') {
                            element.setAttribute('src', 'assets/img/life-off.png');
                            counter = counter +1;
                        }

                    } else if (parseInt(vars.URIdata.life) === 1 && counter < (vars.LIFE_BASE-vars.URIdata.life)){ //3-1 
                        
                        if (element.getAttribute('src') === 'assets/img/life.png') {
                            element.setAttribute('src', 'assets/img/life-off.png');
                            counter = counter +1;
                        }
                    }

                });
            }
            
        },
        // btn 
        rebuildDomView : function() {
        
            $(vars.DOM_MESSAGE_WIN).find('div').html( vars.URIdata.totalPoints +" puntos");            
            //$(vars.DOM_BTN_RESTART).prepend('<a href="index.html" data-role="button" class="" rel="external"><img src="assets/img/salir.png"></a>');
            if (vars.URIdata.indice > 0) {
                var btnRestart = $(vars.DOM_BTN_RESTART).find('a');
                btnRestart.attr('href', 'index.html');
                
            } else {
                var btnRestart = $(vars.DOM_BTN_RESTART).find('a');
                btnRestart.attr('href', 'index.html');
            }

            // Change Color by level
            if (vars.URIdata.level == 2) {
                $(vars.DOM_BTN_ALPHABET).css('color', '#0049f9')
                        .css('border-color', '#0049f9');

                $(vars.DOM_BTN_RESTART)
                        .find('img')
                        .attr('src', 'assets/img/restart-blue.png');

            } else if (vars.URIdata.level == 3) {
                $(vars.DOM_BTN_ALPHABET).css('color', '#9e04ec')
                        .css('border-color', '#9e04ec');

                $(vars.DOM_BTN_RESTART)
                        .find('img')
                        .attr('src', 'assets/img/restart-purple.png');
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
    
            // setting sound
            var mp3URL = this.cordova_getMediaURL(stringSound);
            var media = new Media(mp3URL, null, this.cordova_mediaError, this.cordova_callbackAbcMediaStatus);
            var mediaWrong = new Media(this.cordova_getMediaURL('assets/audio/extra/error.mp3'), null, this.cordova_mediaError);
            var mediaWrongRedirect = new Media(this.cordova_getMediaURL('assets/audio/extra/error.mp3'), null, this.cordova_mediaError, this.cordova_callbackAbcMediaStatus);

            this.mySoundCorrect = media; // redirect
            this.mySoundWrong = mediaWrong; // no redirect
            this.mySoundWrongRedirect = mediaWrongRedirect;
        },
        redirect : function(stringFileHtml) {
            window.location.href = vars.URI.protocol() +'://'+ vars.URI.hostname() + vars.URI.directory() + '/' + stringFileHtml;
        },        
        listenerButtonsAlphabet : function() {
            // LISTENER DESPUES DE CREAR LOS OBJETOS
            $(vars.DOM_BTN_ALPHABET).unbind();
            $(vars.DOM_BTN_ALPHABET).bind('click',function() {
                
                var myLevel = parseInt(vars.URIdata.level) || 1;
                if (myLevel === 1) {
                    isLevel1($(this));
                } else if (myLevel === 2) {
                    clearInterval(self.countdownTimer);
                    isLevel2($(this));
                } else if (myLevel === 3) {
                    
                    isLevel3($(this));
                }
                
            });
            
            // private function Select Correct
            function getDomButtonCorrect() {
                $(vars.DOM_BTN_ALPHABET).each(function(index, element) {
                    var uriAudio = $(this).attr( "data-audio" ) || '';
                    if (uriAudio.length > 0) {
                        if ( $(element).hasClass( "x-btn-1-disabled" ) ) {
                            $(element).removeClass('x-btn-1-disabled');
                        }
                        button = element;
                        button.className = button.className + " x-btn-1-green";
                        return false;
                    }
                });
                
                return true;
            }
            // private function : show wrong
            function getDomButtonWrong(el) {
                $(vars.DOM_BTN_ALPHABET).each(function(key, element) {
                    if ($.trim(el.text()) === $.trim($(element).text())) {
                        if ( $(element).hasClass( "x-btn-1-disabled" ) ) {
                            $(element).removeClass('x-btn-1-disabled');
                        }
                        el.toggleClass( "x-btn-1-wrong" );
                        return false;
                    }
                });
                
                return true;
            }
            // private function lock button
            function getDomButtonLock() {
                $(vars.DOM_BTN_ALPHABET).each(function(key, element) {
                    $(element).toggleClass('x-btn-1-disabled');
                });
                
                return true;
            }
            
            /*
             * Action Level 1
             * at this level are accumulated all points played
             */
            function isLevel1(el) {

                var attribute = el.attr('data-audio') || '';
                var myIndice = parseInt(vars.URIdata.indice) || 0;
                var myPoints = parseInt(vars.URIdata.points) || 0;
                var myTotalPoints = parseInt(vars.URIdata.totalPoints) || 0;
                var myLevel = parseInt(vars.URIdata.level) || 1;
                
                getDomButtonLock();
                if (attribute.length > 0) {
                    getDomButtonCorrect();
                    var totalPointsQuery =  myTotalPoints + parseInt(App.pointsValue);
                    $(vars.DOM_MESSAGE_WIN).fadeIn();  
                    $(vars.DOM_MESSAGE_WIN).find('div').html( totalPointsQuery +" puntos");                       
                    //console.log(vars.URIdata);
                    
                    vars.URIdata.indice = (myIndice + 1);
                    vars.URIdata.points = App.pointsValue;
                    vars.URIdata.totalPoints = totalPointsQuery;
                    vars.URI.query(vars.URIdata);
                    
                    console.log('vars.URIdata', JSON.stringify(vars.URIdata));
                    console.log('vars.URI.query()', JSON.stringify(vars.URI.query()));
                    
                    App.mySoundCorrect.play();
                    // redirect
                    /*setTimeout(function() {
                        var fileHtml = myLevel + '_' + vars.URIdata.indice;
                        App.redirect(fileHtml + '.html?' + vars.URI.query());
                    }, 700);*/      
                    
                    //alert('vars.URIdata ' + JSON.stringify(vars.URIdata) );
                    console.log("app.data despues : vars.URI.query()", vars.URI.query());
                } else { // WRONG
                    getDomButtonWrong(el);
                    getDomButtonCorrect();
                    
                    vars.URIdata.indice = (myIndice + 1);
                    vars.URIdata.points = 0;
                    vars.URIdata.totalPoints = myTotalPoints + 0;
                    vars.URI.query(vars.URIdata);                 
                    console.log("app.data despues : vars.URI.query()", vars.URI.query());

                    
                    // redirect
                    /*setTimeout(function() {
                        var fileHtml = myLevel + '_' + vars.URIdata.indice;
                        App.redirect(fileHtml + '.html?' + vars.URI.query());
                    }, 1000); */
                    
                    App.mySoundWrongRedirect.play();
                    
                }

            }
            
            /*
             * Action Level 2
             */
            function isLevel2(el) {
                
                console.log('app.data antes : vars.URIdata', vars.URIdata);
                var attribute = el.attr('data-audio') || '';
                var myIndice = parseInt(vars.URIdata.indice) || 0;
                var myPoints = parseInt(vars.URIdata.points) || 0;
                var myTotalPoints = parseInt(vars.URIdata.totalPoints) || 0;
                var myLevel = parseInt(vars.URIdata.level) || 1;
                
                getDomButtonLock();
                if (attribute.length > 0) {
                    getDomButtonCorrect();
                    var totalPointsQuery =  myTotalPoints + parseInt(App.pointsValue);
                    $(vars.DOM_MESSAGE_WIN).fadeIn();  
                    $(vars.DOM_MESSAGE_WIN).find('div').html( totalPointsQuery +" puntos");                    
                    
                    vars.URIdata.indice = (myIndice + 1);
                    vars.URIdata.points = App.pointsValue;
                    vars.URIdata.totalPoints = totalPointsQuery;
                    vars.URI.query(vars.URIdata); // actualiza la data URIDATA
                    
                    console.log('vars.URIdata', JSON.stringify(vars.URIdata));
                    console.log('vars.URI.query()', JSON.stringify(vars.URI.query()));
                    
                    App.mySoundCorrect.play();
                    // redirect
                    /*setTimeout(function() {
                        var fileHtml = myLevel + '_' + vars.URIdata.indice;
                        App.redirect(fileHtml + '.html?' + vars.URI.query());
                    }, 700); */
                    
                    
                    
                
                } else { // WRONG
                    getDomButtonWrong(el);
                    getDomButtonCorrect();
                    vars.URIdata.indice = parseInt(vars.URIdata.indice)+1;
                    vars.URIdata.points = 0;
                    vars.URIdata.totalPoints = myTotalPoints + 0;
                    vars.URI.query(vars.URIdata); // actualiza la data URIDATA  //console.log("app.data despues : vars.URI.query()",vars.URIdata);                  
                    
                    // redirect

                    /*setTimeout(function() {
                        var fileHtml = myLevel + '_' + vars.URIdata.indice;
                        App.redirect(fileHtml + '.html?' + vars.URI.query());
                    }, 1000);*/
                    App.mySoundWrongRedirect.play();
                }
           
            }
            
            /*
             * Action Level 3
             */
            function isLevel3(el) {
                
                console.log('app.data antes : vars.URIdata', vars.URIdata);
                var attribute = el.attr('data-audio') || '';
                var myIndice = parseInt(vars.URIdata.indice) || 0;
                var myPoints = parseInt(vars.URIdata.points) || 0;
                var myTotalPoints = parseInt(vars.URIdata.totalPoints) || 0;
                var myLevel = parseInt(vars.URIdata.level) || 1;
                
                //getDomButtonLock();
                if (attribute.length > 0) {
                    getDomButtonLock();
                    getDomButtonCorrect();
                    clearInterval(self.countdownTimer);
                    var totalPointsQuery =  myTotalPoints + parseInt(App.pointsValue);
                    $(vars.DOM_MESSAGE_WIN).fadeIn();  
                    $(vars.DOM_MESSAGE_WIN).find('div').html( totalPointsQuery +" puntos");    
                    
                    vars.URIdata.indice = (myIndice + 1);
                    vars.URIdata.points = App.pointsValue;
                    vars.URIdata.totalPoints = totalPointsQuery;
                    vars.URI.query(vars.URIdata); // actualiza la data URIDATA 
                    console.log('app.data despues : vars.URIdata', vars.URIdata);
                    console.log('vars.URIdata', JSON.stringify(vars.URIdata));
                    console.log('vars.URI.query()', JSON.stringify(vars.URI.query()));
                    //alert("2222");
                    App.mySoundCorrect.play();
                    //alert("333");
                    /*console.log("ECHO ECHO sonido.sonido.sonido LEVEL 3");
                                             
                    var fileHtml = myLevel + '_' + vars.URIdata.indice + '.html?'+ vars.URI.query();
                    console.log('fileHtml', fileHtml);
                    //alert("redirect a "+ fileHtml);
                        setTimeout(function() {
                             
                             App.redirect(fileHtml);
                         }, 700);*/
                         
                    
                } else { // WRONG
                    clearInterval(self.countdownTimer);
                    getDomButtonLock();
                    getDomButtonWrong(el);
                    getDomButtonCorrect();
                    // INIT validation of live
                    vars.URIdata.life = parseInt(vars.URIdata.life)-1;
                    vars.URI.query(vars.URIdata);
                    //console.log("WRONG data", vars.URIdata);
                    // End validation of live
                    console.log('app.data despues : vars.URIdata', vars.URIdata);
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

                    // validation life
                    var flagHome = false;
                    if (vars.URIdata.life==0) {
                        $(vars.DOM_FOOTER).before( '<p class="text-message-loser">Perdiste tus 3 vidas. Intentar nuevamente.</p>' );
                        flagHome = true;
                        //alert("perdiste");
                        setTimeout(function() {
                            App.redirect('index.html');
                        }, 2700);                       
                    }

                    // redirect perdio todas sus vidas
                    if (flagredirect === true) {
                        vars.URIdata.indice = (myIndice + 1);
                        vars.URIdata.points = 0;
                        vars.URIdata.totalPoints = myTotalPoints + 0;
                        vars.URI.query(vars.URIdata); // actualiza la data URIDATA


                         setTimeout(function() {
                             var fileHtml = myLevel + '_' + vars.URIdata.indice;
                             App.redirect(fileHtml + '.html?' + vars.URI.query());
                         }, 700);
                    }
                    
                    // SI NO A SIDO REDIRIGIDO POR NADIE make action :error AL MARCA LA LETRA
                    if (flagHome == false && flagredirect == false) {

                        //vars.URIdata.life = parseInt(vars.URIdata.life)-1;
                        vars.URIdata.indice = parseInt(vars.URIdata.indice)+1;
                        vars.URIdata.points = 0;
                        vars.URIdata.totalPoints = myTotalPoints + 0;
                        vars.URI.query(vars.URIdata); // actualiza la data URIDATA
                    
                        App.mySoundWrongRedirect.play();
                        
                    } else {
                        App.mySoundWrong.play();
                    }
                    
                    
                    
                }/* endIF */
           
            }            
            
                       
        },
        /**
         * This function Setter the variable time, the objetic is know : Game Duration
         * @returns void exucte init time
         */
        initTimerInBackground : function() {
          
            self.timerForLevel = setInterval( function() {
                var counter = parseInt(vars.URIdata.timerForLevel) + 1;
                vars.URIdata.timerForLevel = counter; // adding One second to Time.
                sessionStorage.setItem('timerForLevel', counter);
                vars.URI.query(vars.URIdata); // actualiza la data URIDATA
                
            }, 1000);
        },
        initTimerGetValueInitial : function (timeInSecond) {            

            if (sessionStorage.getItem('timerForLevel') === null 
                || sessionStorage.getItem('timerForLevel') === ''
                || sessionStorage.getItem('timerForLevel') === 0)
            {
                sessionStorage.setItem('timerForLevel', 0);
            } 
            
            console.log('get VALUE timerForLevel', sessionStorage.getItem('timerForLevel'));
            
            return sessionStorage.getItem('timerForLevel');            
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
                var fileHtml = vars.URIdata.level + '_' + vars.URIdata.indice + '.html?' + vars.URI.query();
                //alert(' fileHtml = '+fileHtml);
                    App.redirect(fileHtml);
            }
        }
        
    };
    
    // Object Sound building (ready)
    // soundManager.createSound() etc. may now be called
    //inlinePlayer = new InlinePlayer();
    
    //App.init();


/*});*/


/******************************************************************************/
// Android
/******************************************************************************/
/*document.addEventListener("backbutton", onBackKeyDown, false); // disabled boton back
function onBackKeyDown(e) { e.preventDefault(); }*/

document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    App.init();
    //alert("App.init android");
};
//
//alert('App.init();');
//App.init();
