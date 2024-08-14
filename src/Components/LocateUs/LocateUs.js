import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./LocateUs.css";

const locations = [
  { name: "IIT Kharagpur", lat: 22.314927, lng: 87.310531 },
  {
    name: "GL Bajaj Institute of Technology and Management",
    lat: 28.4595,
    lng: 77.0266,
  },
  { name: "DDU Gorakhpur University", lat: 26.7606, lng: 83.3732 },
];

const LocateUs = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const handleLocationChange = (event) => {
    const location = locations.find((loc) => loc.name === event.target.value);
    setSelectedLocation(location);
  };

  return (
    <div className="locate-us">
      <h2>Locate Us</h2>
      <div className="dropdown">
        <label htmlFor="location-select">Select a location:</label>
        <select
          id="location-select"
          onChange={handleLocationChange}
          value={selectedLocation.name}
        >
          {locations.map((location) => (
            <option key={location.name} value={location.name}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerClassName="map-container"
          center={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
          zoom={15}
        >
          <Marker
            position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export { LocateUs };
