const fs = require("fs");
const csv = require("csvtojson");
const path = require("path");

const csvInputPath = path.join(__dirname, "./attractions_dataset.csv");
const jsonOutputPath = path.join(__dirname, "./attractions.json");
console.log(`CSV input path: ${csvInputPath}, JSON output path: ${jsonOutputPath}`);

const tableColumns = [
    "attraction_name",
    "attraction_type",
    "province_territory",
    "best_time_to_visit",
    "visiting_hours",
    "address",
    "website_link",
    "image_link",
];

const cleanData = (data) => {
    return data.map((row, index) => {
        let cleanedRow = { id: index + 1 };
        Object.keys(row).forEach(key => {
            let cleanedValue = row[key];
            if (typeof cleanedValue === 'string' && cleanedValue.startsWith('"') && cleanedValue.endsWith('"')) {
                cleanedValue = cleanedValue.slice(1, -1);
            }
            cleanedRow[key] = cleanedValue;
        });
        return cleanedRow;
    });
}

const convertCsvToJson = async () => {
    try {
        const jsonObj = await csv({
            headers: tableColumns,
            trim: true
        }).fromFile(csvInputPath);
        
        const cleanedData = cleanData(jsonObj);
        fs.writeFileSync(jsonOutputPath, JSON.stringify(cleanedData, null, 2));
        console.log("CSV file successfully converted to JSON and saved to attractions.json");
    } catch (error) {
        console.error("Error converting CSV file to JSON", error);
    }
}

convertCsvToJson();