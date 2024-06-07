/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const fs = require('fs');
const path = require('path');

exports.seed = async function(knex) {
  const dataPath = path.join(__dirname, "../attractions.json");
  const attractionsData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

  // Deletes ALL existing entries
  await knex('attractions').del()
  await knex('attractions').insert(attractionsData);
};
