const knex = require("knex")(require("../knexfile.js"));

const getProvinces = async (_req, res) => {
    try {
        const data = await knex('attractions')
            .distinct()
            .select(['province_territory']);

        res.status(200).json(data.map(row => row.province_territory));
    } catch (error) {
        res.status(500).send(`Error retrieving Canadian provinces/territories: ${error}`);
    }
}

module.exports = {
    getProvinces
}