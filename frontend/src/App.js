
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const App = () => {
  const [heatData, setHeatData] = useState([]);
  const [landUseData, setLandUseData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/heat").then(({ data }) => setHeatData(data.features));
    axios.get("http://localhost:5000/api/landuse").then(({ data }) => setLandUseData(data.features));
  }, []);

  const chartData = heatData.map((city) => ({
    name: city.properties.name,
    Current: parseFloat(city.properties.temperature),
    Reduced: (parseFloat(city.properties.temperature) - parseFloat(city.properties.solutionImpact)).toFixed(2),
  }));

  return (
    <div style={{ display: "grid", gridTemplateRows: "1fr 400px", gap: "1rem", padding: "1rem" }}>
      <MapContainer center={[40.715, -74.004]} zoom={13} style={{ height: "500px", borderRadius: "12px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {heatData.map((city, idx) => (
          <Marker key={idx} position={city.geometry.coordinates.reverse()}>
            <Popup>
              <strong>{city.properties.name}</strong><br />
              Temp: {city.properties.temperature}°C<br />
              Humidity: {city.properties.humidity}%<br />
              Cooling Impact: {city.properties.solutionImpact}°C
            </Popup>
          </Marker>
        ))}
        {landUseData.map((area, idx) => (
          <Polygon key={idx} positions={area.geometry.coordinates[0].map(coord => [coord[1], coord[0]])} color="green">
            <Popup>
              <strong>{area.properties.type}</strong><br />
              Cooling Potential: {area.properties.coolingPotential}<br />
              Cost: {area.properties.costEstimate}
            </Popup>
          </Polygon>
        ))}
      </MapContainer>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Current" fill="#FF6B6B" name="Current Temp (°C)" />
          <Bar dataKey="Reduced" fill="#4ECDC4" name="Reduced Temp (°C)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default App;
