import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useNavigate } from "@tanstack/react-router";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Muslim population data for major cities
const muslimPopulations = [
  {
    name: "Los Angeles",
    coordinates: [-118.2426, 34.0549],
    population: "500,000+",
  },
  {
    name: "San Francisco",
    coordinates: [-122.4194, 37.7749],
    population: "250,000+",
  },
  {
    name: "San Diego",
    coordinates: [-117.1611, 32.7157],
    population: "100,000+",
  },
  {
    name: "Sacramento",
    coordinates: [-121.4944, 38.5816],
    population: "50,000+",
  },
  { name: "Fresno", coordinates: [-119.7871, 36.7378], population: "30,000+" },
];

const MapChart = () => {
  const [showCaliforniaInfo, setShowCaliforniaInfo] = useState(false);
  const navigate = useNavigate();

  const handleStateClick = (geo: any) => {
    if (geo.properties.name === "California") {
      setShowCaliforniaInfo(true);
    }
  };

  const handleViewCalifornia = () => {
    setShowCaliforniaInfo(false);
    navigate({ to: "/california" });
  };

  return (
    <div className="relative">
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={
                  geo.properties.name === "California" ? "#3B82F6" : "#E9E3DA"
                }
                stroke="#FFF"
                strokeWidth={0.5}
                style={{
                  cursor:
                    geo.properties.name === "California"
                      ? "pointer"
                      : "default",
                }}
                onClick={() => handleStateClick(geo)}
              />
            ))
          }
        </Geographies>
                 {muslimPopulations.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={8} fill="#EF4444" stroke="#fff" strokeWidth={2} />
          </Marker>
        ))}
      </ComposableMap>

      {/* California Info Modal */}
      {showCaliforniaInfo && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md mx-4 transition-colors duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                California
              </h2>
              <button
                onClick={() => setShowCaliforniaInfo(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl transition-colors duration-300"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
                  Muslim Population
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Estimated 1.2+ million Muslims
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
                  Major Communities
                </h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1 transition-colors duration-300">
                  <li>• Los Angeles: 500,000+</li>
                  <li>• San Francisco: 250,000+</li>
                  <li>• San Diego: 100,000+</li>
                  <li>• Sacramento: 50,000+</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
                  Voter Registration
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Help register Muslim voters in your community!
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowCaliforniaInfo(false)}
                  className="flex-1 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={handleViewCalifornia}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  View California
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapChart;
