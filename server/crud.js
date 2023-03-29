const knexConnector = require('../conncetion/dbconnection')
const knex = require('knex')(knexConnector['devlopment']);

module.exports = {

    async cadastro(req, res){
        try {
            const { nome } = req.body;
            const { qtda } = req.body;
            const { descri } = req.body
            const { preco } = req.body;
            const { custo } = req.body;

            await knex('produtos').insert({nome, qtda, preco, custo, descri});
           
            res.json(await knex('produtos'));

        } catch (error) {
            console.log(error);
            res.status(401)
        }
    },

    async info (req, res) {
        res.json(await knex('produtos'));
    },
    async Codinfo (req, res) {
        try {
            const { cod } = req.params;
            console.log(cod);
            res.json(await knex('produtos').where('codpro', '=',cod));
        } catch (error) {
            console.log(error);
        }

    },




}