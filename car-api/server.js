const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;
const cars = require("./data/mockData");

app.use(cors());

// get cars
app.get("/cars", (req, res) => {
    const nameQuery = req.query.name;

    if (nameQuery) {
        const filteredCars = cars.filter(car =>
            car.name.toLowerCase().includes(nameQuery.toLowerCase())
        );
        res.json(filteredCars);
    } else {
        res.json(cars);
    }
});

// start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
