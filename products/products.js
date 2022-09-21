const express = require("express");
const { Router } = express;
const Products = require("../container/Container");
const products = new Products("./database/file.json");
const router = Router();

router.get("/", async (req, res) => {
  prod = await products.getAll();
  try {
    res.send(prod);
  } catch (error) {
    res.send([]);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  prod = await products.getById(id);
  try {
    res.send(prod);
  } catch (error) {
    res.send([]);
  }
});

router.post("/", async (req, res) => {
  const prod = await products.save(req.body);
  const prod2 = await products.getById(prod.length);
  const { title, price, id } = prod2[0];
  res.send(`producto guardado 
  item: ${title} 
  precio: ${price} 
  ID# ${id}`);
});

router.put("/:id", async (req, res) => {
  const prod = await products.edit(req.body);
  const { id } = req.params;
  const prod2 = await products.getById(id);
  const { title, price, thumbnail } = prod2[0];
  res.send(`cambios guardados 
    item: ${title} 
    precio: ${price} 
    thumbnail: ${thumbnail}
    ID# ${id}`);
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const prod = await products.deleteById(id);
  res.send(`producto eliminado`);
});

module.exports = router;
