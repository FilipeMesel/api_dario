const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/teste', (req, res) => {
  const { ola } = req.body;

  if (ola && ola === 'mundo') {
    return res.json({ message: 'hello world' });
  }

  return res.status(400).json({ error: 'Requisição inválida' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
