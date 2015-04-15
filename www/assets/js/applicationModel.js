/**
 * Function Additional Control Time for game (in seconds)
 * 
 * Function  Connection with database 'SQLITE'
 * Model User
 * 
 **/

var applicationModel = function() {
    
//  Declare SQL Query for SQLite
var createStatement = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, timer INTEGER, puntos INTEGER, level INTEGER)";
var selectAllStatement = "SELECT * FROM users WHERE level = ? ORDER BY timer ASC LIMIT 0, 5";
var insertStatement = "INSERT INTO users (name, timer, puntos, level) VALUES (?, ?, ?, ?);";
var updateStatement = "UPDATE users SET name = ?, timer=?, puntos=?, level=? WHERE id=?";
var deleteStatement = "DELETE FROM users WHERE id=?";
var dropStatement = "DROP TABLE users";
var db = openDatabase("abc_db", "1.0", "Abc DB", 200000); // Open SQLite Database

// Function Call When Page is ready.
self : this,
this.userObject = {
    id : null,
    ide : new Date().getUTCMilliseconds(),
    timerForLevel : 0,
    totalPoints : 0,
    name : '',
    level :0
},
        
this.initDatabase = function() {
    try {
         // Check browser is supported SQLite or not.
        if (!window.openDatabase){
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

this.createTable = function() {
    db.transaction(function(tx) {
        tx.executeSql(createStatement, [], function(){}, self.onError);
    });
},

this.insertRecord = function(obj) { // Functionality INSERT OR UPDATE    

    var id = parseInt(obj.id);
    var name = obj.name.toUpperCase();
    var time = parseInt(obj.timerForLevel);
    var point = parseInt(obj.totalPoints);
    var level = parseInt(obj.level);
    
    if (id > 0) {
        this.updateRecord(obj);
        console.log("UPDATED!", obj);
    } else {
        db.transaction(function(tx) {
            tx.executeSql(insertStatement, [name, time, point, level], function(){},self.onError);
            console.log("INSERTED!!", obj);
        });  
    }

},

this.getLastId = function()
{
    var strSqlStatement = 'SELECT id FROM users order by id DESC LIMIT 1;';
    //var sql  ='SELECT last_insert_rowid() FROM users;';
    var lastId = false;
    db.transaction(function(tx) {
        tx.executeSql(strSqlStatement, [], function(tx, result) {
            lastId = result.rows.item(0);
            console.log('item', result.rows.item(0));

        }, onError);
    });
},


this.updateRecord = function(obj) // Get id of record . Function Call when Delete Button Click..
{
    var id = obj.id;
    var name = obj.name.toUpperCase();
    var time = parseInt(obj.timerForLevel);
    var point = parseInt(obj.totalPoints);
    var level = parseInt(obj.level);
    
    db.transaction(function(tx) {
        tx.executeSql(updateStatement, [name, time, point, level, id], function(){}, self.onError);
    });
},

this.dropTable = function() {
    db.transaction(function(tx) {
        tx.executeSql(dropStatement, [], function(){}, self.onError);
    });    
    this.initDatabase();
},

this.onError = function (tx, error) {
    alert("error en DB " +error.message);
},


// Function For Retrive data from Database Display records as list
this.showRecords = function(idLevel) {
    var id = idLevel;
    $("#ranking-top-5").html('');
    var myself = this.self;
    db.transaction(function(tx) {
        tx.executeSql(selectAllStatement, [id], function(tx, result) {
            data = result.rows;
            var $select = $('#ranking-top-5');
            $.each(data,function(key, value) {
                var tr = '<tr class="">'
                    + '<th scope="row" class="rank"><strong>' + (key+1) + '</strong></th>'
                    + '<td>' + value.name + '</td>'
                    + '<td>'+ convertSecondToTimeRanking(value.timer) + '</td>'                    
                    + '</tr>';
                
                $select.append(tr);
            });
            
        });
    });
    
    function convertSecondToTimeRanking (totalSeconds) {
       hours = Math.floor(totalSeconds / 3600);
       totalSeconds %= 3600;
       minutes = Math.floor(totalSeconds / 60);
       seconds = totalSeconds % 60;

       return hours +':' + minutes + ':' + seconds;
    } 


},




// =============================================================================
// HELPERS
// =============================================================================

/**
 *  Get List of User (only 5) : action callback (no is posible return data)
 * @param {type} nameTable
 * @returns {Array|result.rows}
 */
this.fillSelectOfUsers = function(idLevel) {
    
    var SQL = "SELECT * FROM users WHERE level = ? ORDER BY name ASC LIMIT 0, 5";
    var data = false;
    db.transaction(function(tx) {
        tx.executeSql(SQL, [idLevel], function(tx, result) {
            data = result.rows;
            var $select = $('#name_select');
            $select.empty();
            $select.append('<option value="">Seleccione usuario</option>');
            $.each(data,function(key, value) {
                $select.append('<option data-value="'+value.name+'" value=' + value.id + '>'+ value.name + '</option>');
            });
            
        });
    });

    return true;
},
        
// no return : only callback
this.selectedUserById = function(id) {
    var SQL = "SELECT * FROM users WHERE id = ? LIMIT 1";    
    db.transaction(function(tx) {
        var dataIn = false;
        tx.executeSql(SQL, [id], function(tx, result) {
           var user = result.rows.item(0); //console.log('result.rows', result.rows);
            $('#name').val(user.name);
        });
    });
}


};// end class







/**
 * ===========================================================
 * add User HELPER : agregar o actualizar usuario
 * ===========================================================
 */
function addUserRegister(data, appModel, miName) {

    if (true) {
        var user = appModel.userObject;        
        user.name = miName;
        user.timerForLevel = data.timerForLevel;
        user.totalPoints = data.totalPoints;
        user.level = data.level; console.log('USERRRRR', user);
        //add db            
        appModel.insertRecord(user);
        // clear
    } else {
        console.log("No se encontro usuario");
    }

}