const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// add each route variable here


app.use(cors());
app.use(express.json());

// add routes middleware


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})