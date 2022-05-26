const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var cors = require('cors');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


var routes = require('./routes');
routes(app);

app.listen(3001, () => {
    console.log(`Server started on port`);
});