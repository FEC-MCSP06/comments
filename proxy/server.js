const express = require ('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.Port || 8001;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(`${__dirname}/public`)))

app.listen(PORT, ()=>{console.log('listening on port:' + PORT)})