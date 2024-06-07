const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const attractionsRoute = require("./routes/attractions-route.js");
app.use("/api/attractions", attractionsRoute);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})