var port = process.env.PORT || '8080',
    express = require('express'),
    app = express();

app.use('/', express.static('public'));

app.listen(port);
