# Heat Island Visualizer

# 🌍 Heat Island Visualizer

An interactive web application to **visualize urban heat islands** and explore **cooling solutions** such as green roofs and urban tree planting. 🏙️🌳 This project uses **Pears Technology** and **OpenWeatherMap** data to display real-time temperature information and potential mitigation strategies.

---

## 🚀 **Features**
- 🌡️ Live temperature data for urban areas  
- 🗺️ Interactive map with heat points and solution overlays  
- 📊 Comparative bar charts showing temperature reduction impacts  
- 🏢 Land use data highlighting potential green roofs & tree planting zones  

---

## 📂 **Project Structure**
```
HeatIslandVisualizer/
├── backend/              # Express server for data fetching
│   ├── .env              # Environment variables (API keys)
│   ├── package.json      # Backend dependencies & scripts
│   └── server.js         # API routes and data processing
│
├── frontend/             # React app with map & charts
│   ├── public/
│   │   └── index.html    # HTML template
│   ├── src/
│   │   ├── App.js        # Main app with maps and charts
│   │   └── index.js      # Entry point
│   └── package.json      # Frontend dependencies & scripts
│
├── .gitignore            # Files to ignore in version control
└── README.md             # Project overview and instructions
```

---

## 🛠️ **Setup & Run Locally**
### 1️⃣ **Clone or download the project**
```bash
git clone <repository-url>
# OR download the ZIP and extract
```

### 2️⃣ **Backend setup**
```bash
cd backend
npm install
```
Create a `.env` file with your OpenWeatherMap API key:
```env
OPENWEATHERMAP_API_KEY=your_api_key_here
```
Start the server:
```bash
npm start
```
✅ API runs at: `http://localhost:5000`

### 3️⃣ **Frontend setup**
```bash
cd ../frontend
npm install
npm start
```
✅ App runs at: `http://localhost:3000`

---

## 📊 **Usage**
- 🗺️ Navigate the map to see heat data points with temperature and humidity.
- 🏢 Click on polygons to view cooling solution details (e.g., cost & potential impact).
- 📉 Check the bar chart to compare current vs. reduced temperatures.

---

## 🌱 **Technologies Used**
- **Frontend:** React, Leaflet, Recharts  
- **Backend:** Node.js, Express, Axios  
- **APIs:** OpenWeatherMap, Pears Technology (for land use data)  
- **Styling:** CSS with grid layouts and responsive design  

---

## 🚧 **Future Improvements**
- 🌳 Add more solution types (e.g., cool pavements, reflective coatings)  
- 🗺️ Enhance map layers with satellite views  
- 💾 Save and compare historical heat data trends  

---

## 🤝 **Contributing**
Pull requests are welcome! For major changes, please open an issue first to discuss your ideas.

---

## 📄 **License**
MIT License © 2025  

---

## 🙌 **Acknowledgments**
- 🌤️ Data provided by [OpenWeatherMap](https://openweathermap.org/)  
- 🗺️ Land use data via [Pears Technology](https://docs.pears.com/)  
- 📦 Built with love during the Pears Hackathon 🚀
