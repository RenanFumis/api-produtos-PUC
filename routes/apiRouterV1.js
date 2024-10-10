var express = require("express");
var apiRouterV1 = express.Router();

const knex = require("knex")(require("../knexfile").development);

/* GET home page. */
apiRouterV1.get("/produtos", function (req, res, next) {
  knex("produtos")
    .select("*")
    .then((produtos) => {
      res.status(200).json(produtos);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `Erro ao obter produtos: ${err.message}` });
    });
});

apiRouterV1.get("/produtos/:id", function (req, res, next) {
  let id = req.params.id;
  if (id) {
    idInt = Number.parseInt(id);
    knex("produtos")
      .select("*")
      .where({ id: idInt })
      .then((produtos) => {
        if (!produtos.length) {
          res.status(404).json({ message: "Produto não encontrado" });
          return;
        }
        let produto = produtos[0];
        res.status(200).json(produto);
      })
      .catch((err) =>
        res
          .status(500)
          .json({ message: `Erro ao obter produto: ${err.message}` })
      );
  } else {
    res.status(400).json({ message: "Id não informado" });
  }
});

apiRouterV1.post("/produtos", function (req, res, next) {
  let produto = req.body;
  knex("produtos")
    .insert(produto, ["id"])
    .then((produtos) => {
      if (!produtos.length) {
        res.status(400).json({ message: "Erro ao inserir produto" });
        return;
      } else {
        let id = produtos[0].id;
        res
          .status(201)
          .json({ message: "Produto inserido com sucesso", data: { id } });
      }
    })
    .catch((err) =>
      res
        .status(500)
        .json({ message: `Erro ao inserir produto: ${err.message}` })
    );
});

apiRouterV1.delete("/produtos/:id", function (req, res, next) {
  let id = req.params.id;
  if (id) {
    idInt = Number.parseInt(id);
    knex('produtos')
      .where({ id: idInt })
      .del()
      .then(result => {
        res.status(200).json({ message: "Produto removido com sucesso" });
      })
      .catch(err => res.status(500).json({ message: `Erro ao remover produto: ${err.message}`})
    )
    } else {
      res.status(404).json({ message: "Produto não encontrado" });
    }
});

apiRouterV1.put("/produtos/:id", function (req, res, next) {
  let id = req.params.id;
  produto = req.body;
  if (id) {
    idInt = Number.parseInt(id);

    knex('produtos')
    .where({ id: idInt })
    .update(produto)
    .then(result => {
      res
        .status(200)
        .json({
          message: "Produto atualizado com sucesso",
          data: {produto}
        });
      })
    .catch((err) => {
          res.status(500).json({ message: `Erro ao atualizar produto: ${err.message}` });
    })
    } else {
      res.status(404).json({ message: "Produto não encontrado" });
    }
  });
  
module.exports = apiRouterV1;
