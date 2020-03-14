var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
	cursor.log("connected");
	db.close();
});
