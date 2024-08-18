/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('games').del()
  await knex('games').insert([
    { id: 1, game_name: 'Valorant', currently_playing: false },
    { id: 2, game_name: 'Street Fighter', currently_playing: true },
    { id: 3, game_name: 'First Descendant', currently_playing: true }
  ]);
};
