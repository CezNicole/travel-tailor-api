const knex = require("knex")(require("../knexfile.js"));

const getProvinces = async (_req, res) => {
    try {
        const data = await knex('attractions')
            .distinct()
            .select(['province_territory']);

        const provincesWithRandomImage = [];
        for (let i=0; i<data.length; i++) {
            const province = data[i];
            const images = await knex('attractions')
                .select('image_link')
                .where('province_territory', province.province_territory);

            const randomImage = images[Math.floor(Math.random() * images.length)];

            provincesWithRandomImage.push({
                province_territory: province.province_territory,
                image_link: randomImage ? randomImage.image_link : null
            });
        }

        // res.status(200).json(data.map(row => row.province_territory));
        res.status(200).json(provincesWithRandomImage);

    } catch (error) {
        res.status(500).send(`Error retrieving Canadian provinces/territories: ${error}`);
    }
}

module.exports = {
    getProvinces
}