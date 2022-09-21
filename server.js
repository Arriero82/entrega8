const express = require("express");
const products = require('./products/products')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'))

app.use('/api/productos/', products)

const PORT = 8080;
const server = app
  .listen(PORT, () => {
    console.log(`listening on port ${server.address().port}`);
  })
  .on("error", (error) => console.log(error));
