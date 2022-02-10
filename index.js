require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send(`<p> Executando a porta: ${port} </p> <h1> Usando Eslint! </h1>`));

app.listen(port, () => console.log(`Online na porta ${port}`));
