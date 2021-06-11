const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000'}));
app.use(require('morgan')('combined'));
app.use(bodyParser.json());
app.use(require('./routes'));
app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => console.log(`Running at ${app.get('port')}`));
