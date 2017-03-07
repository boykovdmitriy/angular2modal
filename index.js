/**
 * Created by Boykov D. on 3/7/2017.
 */
const express = require('express');
const app     = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'));

process.on('uncaughtException', function (err) {
	console.log(err);
});

app.listen(app.get('port'), function () {
	console.log("Server start on " + app.get('port') + " port");
});