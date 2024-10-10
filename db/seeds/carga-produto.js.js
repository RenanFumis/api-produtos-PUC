/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('produtos').del()
  await knex('produtos').insert([
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
  ]);
};
