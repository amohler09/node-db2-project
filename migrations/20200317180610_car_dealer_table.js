
exports.up = function(knex) {
    return knex.schema.createTable('car-dealer', tbl => {
        //needs VIN, make, model, mileage
        //transmission type and status of the title

        //auto-increment the id
        tbl.increments();

        //add VIN number
        tbl.string('VIN', 17)
        .unique()
        .index();
    
        //add make type
        tbl.string('make', 150)
        .notNullable();

        //add model type
        tbl.string('model', 150)
        .notNullable();

        //add mileage
        tbl.float('mileage')
        .notNullable();

        //add transmission type
        tbl.text('transmission_type');

        //add title status
        tbl.string('title_status', 50);
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car-dealer');
};
