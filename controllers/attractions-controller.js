const knex = require("knex")(require("../knexfile.js"));

const getAttractions = async (req, res) => {
    try {
        const data = await knex('attractions').select('*'); //attractions = mySQL table name
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(`Error retrieving list of attractions from the database: ${error}`);
    }
}

module.exports = {
    getAttractions
}