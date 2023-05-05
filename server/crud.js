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

    async att(req, res){
        try {
            const { cod } = req.params;
            const { qtda } = req.body;
            const { descri } = req.body;
            const { preco } = req.body;
            const { custo } = req.body;

            console.log(req.body);
            const arr = new Array();
            arr.push(qtda, custo, descri, preco)

            console.log(cod);
            console.log(arr);
            console.log(arr.length);

            for (let index = 0; index < arr.length;) {
                const element = arr[index];
                console.log('elemento', element);
                console.log('index', index);
                if (element != undefined) {
                    const DoList = [{id: "qtda", index: 0}, {id: "custo", index: 1}, {id: "descri", index: 2}, {id: "preco", index: 3}];
                    const takeList = DoList.find(enc => index == enc.index)
                    console.log("this is takelist", takeList.id);
          
                    const nike = element;
                    res.json(await knex('produtos').where("codpro", "=", cod).update(`${takeList.id}`, nike));
                }
                index++
            }
            res.status(200)
        } catch (error) {
            res.status(400).send('erro kk')
            console.log(error);
        }
     
        
    },

    async del(req, res){
        try {
            const { delet } = req.params;
            console.log(delet);
            res = await knex('produtos').where("codpro", "=", delet).del().then(res.send('deletado'))

        } catch (error) {
            res.send('deuruimkk')
            console.log(error);
        }
    },

} 