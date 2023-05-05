const knexConnector = require('../conncetion/dbconnection');
const knex = require('knex').knex(knexConnector['devlopment']);


module.exports = {
    
    async cliCad (req, res) {
        try {
            const { nome } = req.body;
            const { email } = req.body;
            const { uf } = req.body;
            const { clientescol } = req.body;
    
            await knex('clientes').insert({nome, email, uf, clientescol});

            res.status(201).send('certo!');
            
        } catch (error) {
            console.log(error);
        }
     
    },
    async cliinfo (req, res){
        try {
            res.status(201).send(await knex('clientes'));
            
        } catch (error) {
            console.log(error);
        }
    }
}