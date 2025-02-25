
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/heat", async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/box/city?bbox=-74.25909,40.477399,-73.700272,40.916178,10&appid=${process.env.OPENWEATHERMAP_API_KEY}`
    );
    const geoJSON = {
      type: "FeatureCollection",
      features: data.list.map((city) => ({
        type: "Feature",
        properties: {
          name: city.name,
          temperature: (city.main.temp - 273.15).toFixed(2),
          humidity: city.main.humidity,
          solutionImpact: (Math.random() * 2 + 1).toFixed(1),
        },
        geometry: {
          type: "Point",
          coordinates: [city.coord.lon, city.coord.lat],
        },
      })),
    };
    res.json(geoJSON);
  } catch (err) {
    console.error("Error fetching heat data:", err.message);
    res.status(500).send("Failed to fetch heat data.");
  }
});

app.get("/api/landuse", (req, res) => {
  const landUseGeoJSON = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          type: "Potential Green Roof",
          coolingPotential: "1.5°C",
          costEstimate: "$20,000",
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-74.004, 40.715],
            [-74.004, 40.716],
            [-74.003, 40.716],
            [-74.003, 40.715],
            [-74.004, 40.715],
          ]],
        },
      },
      {
        type: "Feature",
        properties: {
          type: "Urban Tree Planting",
          coolingPotential: "2.0°C",
          costEstimate: "$10,000",
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-74.005, 40.714],
            [-74.005, 40.715],
            [-74.004, 40.715],
            [-74.004, 40.714],
            [-74.005, 40.714],
          ]],
        },
      },
    ],
  };
  res.json(landUseGeoJSON);
});

app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
