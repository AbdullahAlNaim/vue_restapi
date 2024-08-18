const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 3000
const knex = require('knex')(require('./knexfile').development);

app.use(express.json());
app.use(cors());

app.get('/api/games', async (req, res, next) => {
  try {
    const games = await knex('games').select('*');
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch games' });
  }

})

app.listen(port, () => {
  console.log(`listening to port ${port}...`)
})
