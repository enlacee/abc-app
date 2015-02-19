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

        PARAM_DOM_TIMER : '#timer'
    };

    var App = {
        userName : 'jhon doe',
        level : -1, // default level 1
        //timer : null, // default timeless
        dataUri : {}, // all data 
        alphabetPosition : 0,
        points : 0,
        score : 0,

        init : function() {
            console.log("init App");
            this.readAllDataLevel();

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




