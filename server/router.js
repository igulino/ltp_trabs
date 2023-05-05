const express = require('express');
const app = express();
const features = require('./crud');
const cliFeatures = require('./clientCrud');
const cors = require('cors');
app.use(cors());
app.use(express.json());

//crud produtos
app.post('/cad', features.cadastro);
app.get('/info', features.info);
app.get('/info/:cod', features.Codinfo);
app.put('/cad/:cod', features.att);
app.delete('/del/:delet', features.del);

//crud clientes
app.post('/cli/cad', cliFeatures.cliCad);
app.get('/infocli', cliFeatures.cliinfo);


//rodando em...
app.listen(3030, () =>{
    console.log('rodando pai...');
}) 