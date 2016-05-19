var db;

var database = {

    createDatabase: function () {
        //Create database or Open existing database
        var dbSize = 0.5 * 1024 * 1024;
        db = openDatabase("USR", "1.0", "Ultimate Self Realization", dbSize);
    },
    executeQuery: function ($sql, $param){
        //Transaction Details
        db.transaction(function (tx) {
            tx.executeSql($sql, $param, 
                // Success method
                function (tx, message) {
                    //In case of a success. Can add logging here is required for debugging.
                },
                // Error Method
                function (tx, error) {
                        console.log("Failed to execute query");
                        console.log("Query: " + $sql);
                        console.log(error.message)
                }
            );
        });
    },
    clearDatabase: function(){
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM TFTD_INDEX");
        });
    },
    initDatabase: function () {
        //Create/Open database
        database.createDatabase();

        //Temp: Clear Database
        database.clearDatabase();

        //Create Tables
        $createTftdIndex = "CREATE TABLE IF NOT EXISTS TFTD_INDEX (TFTD_ID INTEGER PRIMARY KEY,TFTD_YEAR INTEGER, TFTD_MONTH INTEGER, TFTD_DATE INTEGER, TFTD_TITLE VARCHAR, TFTD_URL VARCHAR)";
        database.executeQuery($createTftdIndex, null);
    }
};