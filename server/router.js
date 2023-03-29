const express = require('express');
const app = express();
const features = require('./crud');
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.post('/cad', features.cadastro);
app.get('/info', features.info);
app.get('/info/:cod', features.Codinfo);

app.listen(3030, () =>{
    console.log('rodando pai...');
}) 