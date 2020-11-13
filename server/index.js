const app = require('./app');
const db = require('./database');
const port = 3000;

app.listen(port, () => {
  console.log(`Connected to ${port}`);
});
