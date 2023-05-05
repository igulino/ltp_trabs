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
    },

    async cliatt (req, res){
        try {
            const { cli } = req.params;
            const { nome } = req.body;
            const { email } = req.body;
            const { uf } = req.body;
            const { clientescol } = req.body;
            console.log(cli);
 
            const view = await knex('clientes').where('codcli','=', cli).update('nome', email)

            res.status(201).json(view)
        } catch (error) {
            console.log(error);
        }
    },

    async clidelete (req, res){
        try {
            const { delet } = req.params;
            console.log(delet);
            res = await knex('clientes').where("codcli", "=", delet).del().then(res.send('deletado'))

        } catch (error) {   
            console.log(error);
        }
    }
}