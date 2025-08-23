import { useState } from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useNavigate } from "@tanstack/react-router";

// California counties GeoJSON URL
const californiaGeoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

// Major California cities with coordinates
const californiaCities = [
  {
    name: "Los Angeles",
    coordinates: [-118.2426, 34.0549],
    population: "4,000,000+",
    description:
      "The largest city in California and the second-largest in the United States.",
  },
  {
    name: "San Francisco",
    coordinates: [-122.4194, 37.7749],
    population: "873,000+",
    description:
      "A major cultural, commercial, and financial center in Northern California.",
  },
  {
    name: "San Diego",
    coordinates: [-117.1611, 32.7157],
    population: "1,400,000+",
    description: "Known for its beaches, parks, and warm climate.",
  },
  {
    name: "Sacramento",
    coordinates: [-121.4944, 38.5816],
    population: "500,000+",
    description: "The capital city of California and the seat of government.",
  },
  {
    name: "Fresno",
    coordinates: [-119.7871, 36.7378],
    population: "530,000+",
    description: "A major city in the San Joaquin Valley.",
  },
  {
    name: "Oakland",
    coordinates: [-122.2711, 37.8044],
    population: "440,000+",
    description: "A major West Coast port city in the San Francisco Bay Area.",
  },
  {
    name: "Long Beach",
    coordinates: [-118.1937, 33.7701],
    population: "470,000+",
    description: "A coastal city in Southern California.",
  },
  {
    name: "Bakersfield",
    coordinates: [-119.0187, 35.3733],
    population: "400,000+",
    description: "A city in the southern San Joaquin Valley.",
  },
];

// Dummy political data for each city
const politicalData = {
  "Los Angeles": [
    {
      name: "Mayor Karen Bass",
      position: "Mayor of Los Angeles",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      description:
        "First woman and second African American to serve as Mayor of Los Angeles.",
      term: "2022 - Present",
    },
    {
      name: "Council President Paul Krekorian",
      position: "City Council President",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description: "Represents Council District 2 in the San Fernando Valley.",
      term: "2022 - Present",
    },
    {
      name: "District Attorney George Gascón",
      position: "Los Angeles County District Attorney",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description: "Progressive prosecutor focused on criminal justice reform.",
      term: "2020 - Present",
    },
    {
      name: "Sheriff Robert Luna",
      position: "Los Angeles County Sheriff",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      description: "Former Long Beach Police Chief, elected in 2022.",
      term: "2022 - Present",
    },
    {
      name: "City Attorney Hydee Feldstein Soto",
      position: "Los Angeles City Attorney",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description: "First Latina to serve as Los Angeles City Attorney.",
      term: "2022 - Present",
    },
  ],
  "San Francisco": [
    {
      name: "Mayor London Breed",
      position: "Mayor of San Francisco",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      description:
        "First African American woman to serve as Mayor of San Francisco.",
      term: "2018 - Present",
    },
    {
      name: "Board President Aaron Peskin",
      position: "Board of Supervisors President",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description:
        "Represents District 3 (North Beach, Chinatown, Financial District).",
      term: "2024 - Present",
    },
    {
      name: "District Attorney Brooke Jenkins",
      position: "San Francisco District Attorney",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description: "Appointed to replace recalled DA Chesa Boudin.",
      term: "2022 - Present",
    },
    {
      name: "Sheriff Paul Miyamoto",
      position: "San Francisco Sheriff",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      description: "First Asian American to serve as San Francisco Sheriff.",
      term: "2020 - Present",
    },
    {
      name: "City Attorney David Chiu",
      position: "San Francisco City Attorney",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description:
        "Former State Assemblymember and Board of Supervisors President.",
      term: "2021 - Present",
    },
  ],
  "San Diego": [
    {
      name: "Mayor Todd Gloria",
      position: "Mayor of San Diego",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      description:
        "First person of color and first openly gay person to serve as Mayor of San Diego.",
      term: "2020 - Present",
    },
    {
      name: "Council President Sean Elo-Rivera",
      position: "City Council President",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description: "Represents District 9 in the eastern part of the city.",
      term: "2023 - Present",
    },
    {
      name: "District Attorney Summer Stephan",
      position: "San Diego County District Attorney",
      party: "Republican",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description:
        "First woman to serve as San Diego County District Attorney.",
      term: "2017 - Present",
    },
    {
      name: "Sheriff Kelly Martinez",
      position: "San Diego County Sheriff",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      description: "First woman to serve as San Diego County Sheriff.",
      term: "2023 - Present",
    },
    {
      name: "City Attorney Mara Elliott",
      position: "San Diego City Attorney",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description: "First woman to serve as San Diego City Attorney.",
      term: "2016 - Present",
    },
  ],
  Sacramento: [
    {
      name: "Mayor Darrell Steinberg",
      position: "Mayor of Sacramento",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      description: "Former State Senate President pro Tempore.",
      term: "2016 - Present",
    },
    {
      name: "Council Member Katie Valenzuela",
      position: "City Council Member",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description:
        "Represents District 4, first Latina elected to Sacramento City Council.",
      term: "2020 - Present",
    },
    {
      name: "District Attorney Thien Ho",
      position: "Sacramento County District Attorney",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description:
        "First Vietnamese American to serve as Sacramento County DA.",
      term: "2023 - Present",
    },
    {
      name: "Sheriff Jim Cooper",
      position: "Sacramento County Sheriff",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      description: "Former State Assemblymember and Sacramento County Sheriff.",
      term: "2022 - Present",
    },
    {
      name: "City Attorney Susana Alcala Wood",
      position: "Sacramento City Attorney",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description: "First Latina to serve as Sacramento City Attorney.",
      term: "2021 - Present",
    },
  ],
  Fresno: [
    {
      name: "Mayor Jerry Dyer",
      position: "Mayor of Fresno",
      party: "Republican",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      description: "Former Fresno Police Chief, elected mayor in 2020.",
      term: "2020 - Present",
    },
    {
      name: "Council President Tyler Maxwell",
      position: "City Council President",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description:
        "Represents District 4, youngest person elected to Fresno City Council.",
      term: "2022 - Present",
    },
    {
      name: "District Attorney Lisa Smittcamp",
      position: "Fresno County District Attorney",
      party: "Republican",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description: "First woman to serve as Fresno County District Attorney.",
      term: "2014 - Present",
    },
    {
      name: "Sheriff John Zanoni",
      position: "Fresno County Sheriff",
      party: "Republican",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      description: "Former Fresno Police Chief, elected sheriff in 2022.",
      term: "2022 - Present",
    },
    {
      name: "City Attorney Andrew Janz",
      position: "Fresno City Attorney",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description: "Former prosecutor and congressional candidate.",
      term: "2023 - Present",
    },
  ],
  Oakland: [
    {
      name: "Mayor Sheng Thao",
      position: "Mayor of Oakland",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      description:
        "First Hmong American woman to serve as mayor of a major U.S. city.",
      term: "2023 - Present",
    },
    {
      name: "Council President Nikki Fortunato Bas",
      position: "City Council President",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description:
        "Represents District 2, first Filipina American on Oakland City Council.",
      term: "2023 - Present",
    },
    {
      name: "District Attorney Pamela Price",
      position: "Alameda County District Attorney",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description:
        "First African American woman to serve as Alameda County DA.",
      term: "2023 - Present",
    },
    {
      name: "Sheriff Yesenia Sanchez",
      position: "Alameda County Sheriff",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      description: "First Latina to serve as Alameda County Sheriff.",
      term: "2023 - Present",
    },
    {
      name: "City Attorney Barbara Parker",
      position: "Oakland City Attorney",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description:
        "First African American woman to serve as Oakland City Attorney.",
      term: "2011 - Present",
    },
  ],
  "Long Beach": [
    {
      name: "Mayor Rex Richardson",
      position: "Mayor of Long Beach",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      description: "First African American mayor of Long Beach.",
      term: "2022 - Present",
    },
    {
      name: "Vice Mayor Cindy Allen",
      position: "Vice Mayor",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description:
        "Represents District 2, former Long Beach Police Department officer.",
      term: "2020 - Present",
    },
    {
      name: "District Attorney George Gascón",
      position: "Los Angeles County District Attorney",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description: "Serves Long Beach as part of Los Angeles County.",
      term: "2020 - Present",
    },
    {
      name: "Sheriff Robert Luna",
      position: "Los Angeles County Sheriff",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      description: "Former Long Beach Police Chief, now LA County Sheriff.",
      term: "2022 - Present",
    },
    {
      name: "City Attorney Dawn McIntosh",
      position: "Long Beach City Attorney",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description: "First woman to serve as Long Beach City Attorney.",
      term: "2021 - Present",
    },
  ],
  Bakersfield: [
    {
      name: "Mayor Karen Goh",
      position: "Mayor of Bakersfield",
      party: "Republican",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      description: "First Asian American mayor of Bakersfield.",
      term: "2016 - Present",
    },
    {
      name: "Council Member Andrae Gonzales",
      position: "City Council Member",
      party: "Democratic",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description:
        "Represents Ward 1, youngest person elected to Bakersfield City Council.",
      term: "2020 - Present",
    },
    {
      name: "District Attorney Cynthia Zimmer",
      position: "Kern County District Attorney",
      party: "Republican",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description: "First woman to serve as Kern County District Attorney.",
      term: "2018 - Present",
    },
    {
      name: "Sheriff Donny Youngblood",
      position: "Kern County Sheriff",
      party: "Republican",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      description: "Longest-serving sheriff in Kern County history.",
      term: "2006 - Present",
    },
    {
      name: "City Attorney Virginia Gennaro",
      position: "Bakersfield City Attorney",
      party: "Republican",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description: "First woman to serve as Bakersfield City Attorney.",
      term: "2019 - Present",
    },
  ],
};

export const California = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCityClick = (cityName: string) => {
    setSelectedCity(cityName);
  };

  const handleBackToHome = () => {
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <button
              onClick={handleBackToHome}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2"
            >
              <span>←</span>
              <span>Back to Home</span>
            </button>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            California
            <span className="text-green-600 dark:text-green-400">
              {" "}
              Communities
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Explore Muslim communities and political representation across
            California's major cities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* California Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center transition-colors duration-300">
              California Map
            </h2>
            <div className="relative">
              <ComposableMap
                projection="geoAlbersUsa"
                projectionConfig={{ scale: 2000, center: [-120, 37] }}
              >
                <Geographies geography={californiaGeoUrl}>
                  {({ geographies }: { geographies: any[] }) =>
                    geographies
                      .filter((geo) => geo.properties.STATE === "06") // California state code
                      .map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#E9E3DA"
                          stroke="#FFF"
                          strokeWidth={0.5}
                        />
                      ))
                  }
                </Geographies>
                {californiaCities.map(({ name, coordinates }) => (
                  <Marker key={name} coordinates={coordinates}>
                    <circle
                      r={6}
                      fill="#EF4444"
                      stroke="#fff"
                      strokeWidth={2}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCityClick(name)}
                    />
                  </Marker>
                ))}
              </ComposableMap>
            </div>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-4 transition-colors duration-300">
              Click on red dots to view city information
            </p>
          </motion.div>

          {/* Cities List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Major Cities
            </h2>
            <div className="space-y-4">
              {californiaCities.map((city) => (
                <button
                  key={city.name}
                  onClick={() => handleCityClick(city.name)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    selectedCity === city.name
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600"
                  }`}
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    {city.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    Population: {city.population}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    {city.description}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Political Information */}
        {selectedCity && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
              Political Leadership in {selectedCity}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {politicalData[selectedCity as keyof typeof politicalData]?.map(
                (politician, index) => (
                  <motion.div
                    key={politician.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-300"
                  >
                    <div className="text-center">
                      <img
                        src={politician.image}
                        alt={politician.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                        {politician.name}
                      </h3>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1 transition-colors duration-300">
                        {politician.position}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 transition-colors duration-300">
                        {politician.party} • {politician.term}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                        {politician.description}
                      </p>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
