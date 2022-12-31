var mysql = require('mysql');
function connect() {
        var con = mysql.createConnection({
                host: "127.0.0.1",
                // port: "3307",
                user: "admin",
                password: "admin123",
                database: "web_saleproduct"

        });
        con.connect(function (err) {
                if (err) throw err;
                console.log("DB Connected!");
        });

        return con;
}

module.exports = {
        connect
}




