const express = require('express');
const app = express();

app.use(express.json());

const usuarios = [
  { id: 1, nome: 'Ana Silva', email: 'ana@email.com' },
  { id: 2, nome: 'Bruno Souza', email: 'bruno@email.com' },
  { id: 3, nome: 'Carla Oliveira', email: 'carla@email.com' }
];

app.get('/', (req, res) => {
  res.send('Olá mundo!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
