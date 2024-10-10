/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('produtos', tbl => {
    tbl.increments('id').primary();
    tbl.text('descricao', 255).unique().notNullable();
    tbl.text('marca', 130).notNullable();
    tbl.decimal('preco').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('produtos');
  
};
