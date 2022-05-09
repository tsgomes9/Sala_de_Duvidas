const express = require('express')
const route = require('./route')
const path = require('path')
const server = express() /*Inicia o Express */

server.set('view engine', 'ejs')

server.set(
  'views',
  path.join(__dirname, 'views')
) /*Faz um join do path src com a pasta views */

server.use(route)

server.listen(3000, () =>
  console.log('RODANDO')
) /*Servidor roda na porta 3000 */
