const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

require('./src/Routes/index')(app);

app.use(cors());
app.use(express.json());
const port = 3333;
app.listen(port);
console.log(`listening on ${port}`);