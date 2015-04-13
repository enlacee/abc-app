//add listener when device ready
    document.addEventListener("deviceready", onDeviceReady, false);
    var db = window.openDatabase("Dummy_DB", "1.0", "Just a Dummy DB", 200000); //will create database Dummy_DB or open it
 
    //function will be called when device ready
    function onDeviceReady(){
        db.transaction(populateDB, errorCB, successCB);
    }
 
    //create table and insert some record
    function populateDB(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS SoccerPlayer (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT NOT NULL, Club TEXT NOT NULL)');
        tx.executeSql('INSERT INTO SoccerPlayer(Name,Club) VALUES ("Alexandre Pato", "AC Milan")');
        tx.executeSql('INSERT INTO SoccerPlayer(Name,Club) VALUES ("Van Persie", "Arsenal")');
    }
 
    //function will be called when an error occurred
    function errorCB(err) {
        alert("Error processing SQL: "+err.code);
    }
 
    //function will be called when process succeed
    function successCB() {
        alert("success!");
        db.transaction(queryDB,errorCB);
    }
 
    //select all from SoccerPlayer
    function queryDB(tx){
        tx.executeSql('SELECT * FROM SoccerPlayer',[],querySuccess,errorCB);
    }
 
    function querySuccess(tx,result){
        $('#SoccerPlayerList').empty();
        $.each(result.rows,function(index){
            var row = result.rows.item(index);
            $('#SoccerPlayerList').append('<li><a href="#"><h3 class="ui-li-heading">'+row['Name']+'</h3><p class="ui-li-desc">Club '+row['Club']+'</p></a></li>');
        });
 
        $('#SoccerPlayerList').listview();
    }
    
    