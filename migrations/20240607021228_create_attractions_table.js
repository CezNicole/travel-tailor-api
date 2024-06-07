/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('attractions', table => {
    table.increments('id').primary();
    table.string('attraction_name');
    table.string('attraction_type');
    table.string('province_territory');
    table.string('best_time_to_visit');
    table.string('visiting_hours');
    table.string('address');
    table.string('website_link');
    table.string('image_link');
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('attractions');
};
