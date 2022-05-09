const express = require('express') /*Importação do Express */

const route = express.Router()

route.get('/', (req, res) => res.render('index')) /*requisição e resposta*/

module.exports = route
