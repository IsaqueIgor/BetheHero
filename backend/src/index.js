// Importando o módulo express para a várivel express
const express = require('express');
const routes = require("./routes")

// Criando a aplicação
const app = express();

app.use(express.json());
app.use(routes);

// Ouvindo a porta 3333
app.listen(3333);