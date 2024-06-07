const knex = require("knex")(require("../knexfile.js"));

const getAttractionsByProvinceAndSeason = async (req, res) => {
    const {province_territory, season} = req.params;

    try {
        if(!province_territory && !season){
            res.status(400).json({
                message:"Search term is required"
            });
        }

        const data = await knex('attractions')
            .select('*')
            .where({province_territory: province_territory, best_time_to_visit: season})
            
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(`Error retrieving list of attractions from the database: ${error}`);
    }
}

module.exports = {
    getAttractionsByProvinceAndSeason
}