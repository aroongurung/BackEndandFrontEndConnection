const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8021;

app.get(`/api`, (req, res) => {
    res.json({"carBrands" : [
        "Mercedes Benz", 
        "BMW", 
        "Audi",
        "Volvo",
        "VolksWagen",
        "Toyota",
        "Skoda"
    ]});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});