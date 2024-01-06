const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

let valor = 0;

app.post('/tx', (req, res) => {
  const { sensor } = req.body;
  valor = sensor;
  if (sensor) {
    return res.json({ message: 'recebido do esp32' });
  }

  return res.status(400).json({ error: 'Requisição inválida' });
});

app.get('/rx', (req, res) => {

    return res.json({ message: valor });

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
