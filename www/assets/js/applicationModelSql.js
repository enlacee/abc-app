/**
 * Function Additional Control Time for game (in seconds)
 * 
 * Function  Connection with database 'SQLITE'
 * Model User
 * 
 **/

var applicationModel = function () {

    var sqlBase = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, timer INTEGER, puntos INTEGER, level INTEGER);";
    var sqlRecord = "INSERT INTO users (name, timer, puntos, level) VALUES ('pepe lucho', 26, 2, 1);";
    var sqlDropTable = 'DROP TABLE users;';

    html5sql.openDatabase("demo", "Demo Database", 2 * 1024 * 1024); // XMB

    /*
     //  Declare SQL Query for SQLite
     var createStatement = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, timer INTEGER, puntos INTEGER, level INTEGER)";
     var selectAllStatement = "SELECT * FROM users WHERE level = ? ORDER BY timer ASC LIMIT 0, 5";
     var insertStatement = "INSERT INTO users (name, timer, puntos, level) VALUES (?, ?, ?, ?);";
     var updateStatement = "UPDATE users SET name = ?, timer=?, puntos=?, level=? WHERE id=?";
     var deleteStatement = "DELETE FROM users WHERE id=?";
     var dropStatement = "DROP TABLE users";
     */

    // Function Call When Page is ready.
    self : this,
    this.userObject = {
                id: null,
                ide: new Date().getUTCMilliseconds(),
                timerForLevel: 0,
                totalPoints: 0,
                name: '',
                level: 0
            },
    this.initDatabase = function () {
        try {
            // Check browser is supported SQLite or not.
            if (!window.openDatabase) {
                alert('Databases are not supported in this browser.');
            } else {
                this.createTable(); // If supported then call Function for create table in SQLite
            }
        } catch (e) {
            if (e == 2) {
                // Version number mismatch. 
                console.log("Invalid database version.");
            } else {
                console.log("Unknown error " + e + ".");
            }
            return;
        }
    },
    this.createTable = function () {
            html5sql.process(sqlBase,function () { /*Success*/ },function (error, failingQuery) { /*Failure*/alert('error : ' + failingQuery)});
    },
    this.insertRecord = function (obj) { // Functionality INSERT OR UPDATE    

        var id = parseInt(obj.id);
        var name = obj.name.toUpperCase();
        var time = parseInt(obj.timerForLevel);
        var point = parseInt(obj.totalPoints);
        var level = parseInt(obj.level);

        if (id > 0) {
            // this.updateRecord(obj);
            console.log("NO UPADTE : " + name);
        } else {
            console.log("INSERT : " + name);
            var sqlUpdate = [{
                    'sql': "INSERT INTO users (name, timer, puntos, level) VALUES (?, ?, ?, ?);",
                    'data': [name, time, point, level],
                    'success': function (transaction, results, level) {
                        //Just Added Bob to contacts table   
                    },
                }];
            // EXE
            html5sql.process(sqlUpdate, function () { /*Success*/ }, function (error, failingQuery) {/*Failure*/ alert('error: ' + failingQuery);});

        }
    },
    this.getLastId = function ()
    {
    },
    this.updateRecord = function (obj) // Get id of record . Function Call when Delete Button Click..
    {
    },
    this.dropTable = function () {
    },
    // Function For Retrive data from Database Display records as list
    this.showRecords = function (idLevel) {
        var id = idLevel;
        var sqlSelectOrderByTime = [{
                'sql': "SELECT * FROM users WHERE level = ? ORDER BY timer ASC LIMIT 0, 5",
                'data': [id]
            }];

//
        var $select = $('#ranking-top-5');
        $select.html('');        
        html5sql.process(
            sqlSelectOrderByTime,            
            function (transaction, results, rowsArray) {
                var tr = '';
                for (var i = 0; i < rowsArray.length; i++) {
                    tr = tr + '<tr class="">'
                            + '<th scope="row" class="rank"><strong>' + (i + 1) + '</strong></th>'
                            + '<td>' + rowsArray[i].name + '</td>'
                            + '<td>' + convertSecondToTimeRanking(rowsArray[i].timer) + '</td>'
                            + '</tr>';
                    //alert("DATA : " + rowsArray[i].name  + " - " + rowsArray[i].timer + " ");
                }
                //html
                    var htmlTable = '' 
                    +'<table class="table table-bordered">'
                    +'    <thead>'
                    +'        <tr>'
                    +'            <th colspan="3" class="text-center rank-top">Ranking Top 5 <span class="color-blue">Nivel '+id+'</span></th>'
                    +'        </tr>'
                    +'        <tr>'
                    +'            <th class="col-xs-1">#</th>'
                    +'            <th class="text-center">Nombre</th>'
                    +'            <th class="text-center">Tiempo</th>'                            
                    +'        </tr>'
                    +'    </thead>'
                    +'    <tbody>'
                    + tr
                    +'    </tbody>'
                    +'</table>';
                    $select.html(htmlTable);
                //html
            },
            function (error, statement) {
                alert('error');       
            }
        );





//
        this.clearData();
        // helper
        function convertSecondToTimeRanking(totalSeconds) {
            hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            minutes = Math.floor(totalSeconds / 60); addMinutes = (hours * 60);
            minutes = minutes + addMinutes;
            seconds = totalSeconds % 60;

            return  minutes + ':' + seconds;
        }
    },
    
    this.clearData = function () {
              html5sql.process(
            ["SELECT count(*) as count FROM users;"],
            function (transaction, results, rowsArray) {                
                if (rowsArray[0].count >= 1000) {
                    var sql = [sqlDropTable, sqlBase];
                    html5sql.process(sql, function () { alert('Se limpiaron los datos ranking') /*Success*/ }, function (error, failingQuery) {/*Failure*/ alert('error: ' + failingQuery);});
                }
                //console.log("COUNT rowsArray : " , rowsArray);                
            },
            function (error, statement) {
                alert('error');       
            }
        );
    },
            
// =============================================================================
// HELPERS
// =============================================================================

    this.fillSelectOfUsers = function(idDom) {
        var SQL = "SELECT * FROM users WHERE level = 1 ORDER BY name ASC LIMIT 0, 5";
        var $select = $('#nombreUser');
        if (typeof(idDom)!= 'undefined') {
            var SQL = "SELECT * FROM users WHERE level = 1 ORDER BY name ASC";
            var $select = $('#nombreUser_data');
        }
        
        $select.html('');        
        html5sql.process(
            SQL,            
            function (transaction, results, rowsArray) {
                var tr = '';
                var nameUserss = sessionStorage.getItem('nombreUser'); //console.log('nameUserss', nameUserss);
                for (var i = 0; i < rowsArray.length; i++) {
                    console.log('rowsArray[i].name', rowsArray[i].name);
                    var addSelected = (nameUserss === rowsArray[i].name) ? ' selected ' : ''; //console.log('rowsArray', rowsArray[i].name);
                    $select.append('<option '+addSelected+' data-value="'+rowsArray[i].name+'" value=' + rowsArray[i].id + '>'+ rowsArray[i].name + '</option>');
                }
            },
            function (error, statement) {
                alert('error html5sql');       
            }
        );
        //

        return true;
    }
    
};// end class







/**
 * ===========================================================
 * add User HELPER : agregar o actualizar usuario
 * ===========================================================
 */
function addUserRegister(data, appModel, miName) {

    if ((typeof (data) == 'object')) {
        var user = appModel.userObject;
        user.name = miName;
        user.timerForLevel = data.timerForLevel;
        user.totalPoints = data.totalPoints;
        console.log("=======DATA======");
        //console.log('user', user);
        console.log("=======DATA======");
        //alert('user.name:'+user.name + ', user.timerForLevel:'+ user.timerForLevel+ ', user.totalPoints:' + user.totalPoints)

        user.level = data.level;
        //add db            
        appModel.insertRecord(user);
        // clear
    } else {
        alert("No puedo registrar : miname = " + miName);
    }

}