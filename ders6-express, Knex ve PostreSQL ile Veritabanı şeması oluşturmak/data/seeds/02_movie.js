/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movie').del()
  await knex('movie').insert([
    {id: 1, name: 'Sakar Şakir'},
    {id: 2, name: 'Transformer'},
    {id: 3, name: 'Yenilmezler'}
  ]);
};
