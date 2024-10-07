var express = require('express');
var apiRouterV1 = express.Router();

var produtos = [
  {"id": 1, "descricao": "Camiseta", "marca": "Nike", "preco": 49.99},
  {"id": 2, "descricao": "Tênis", "marca": "Adidas", "preco": 199.99},
  {"id": 3, "descricao": "Boné", "marca": "Puma", "preco": 29.99},
  {"id": 4, "descricao": "Meia", "marca": "Fila", "preco": 9.99},
  {"id": 5, "descricao": "Calça", "marca": "Reebok", "preco": 99.99},
  {"id": 6, "descricao": "Jaqueta", "marca": "Vans", "preco": 149.99},
  {"id": 7, "descricao": "Bermuda", "marca": "Lacoste", "preco": 79.99},
  {"id": 8, "descricao": "Chinelo", "marca": "Havaianas", "preco": 19.99},
  {"id": 9, "descricao": "Blusa", "marca": "Diesel", "preco": 69.99},
  {"id": 10, "descricao": "Cinto", "marca": "Tommy Hilfiger", "preco": 39.99}
]

/* GET home page. */
apiRouterV1.get('/produtos', function(req, res, next) {
  res.json(produtos);

});

apiRouterV1.get('/produtos/:id', function(req, res, next){
  let id = req.params.id;
  if(id){
    idInt = Number.parseInt(id)
    let idx = produtos.findIndex(p => p.id === idInt)
    if( idx >= 0 ){
      res.json(produtos[idx])
    }
    else {
      res.status(404).json({message: "Produto não encontrado"})
    }
  }

  else {
    res.status(404).json({message: "Produto não encontrado"})
  }
});

module.exports = apiRouterV1;
