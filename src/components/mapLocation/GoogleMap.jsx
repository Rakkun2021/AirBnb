import React from "react";
import { useMemo } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import "./map.css";
require('dotenv').config();

const MyMap = ({ lat, lng }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map lat={lat} lng={lng} />;
};

function Map({ lat, lng }) {
  const center = useMemo(
    () => ({ lat: parseFloat(lat), lng: parseFloat(lng) }),
    [lat, lng]
  );
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map">
      <MarkerF position={center} />
    </GoogleMap>
  );
}

export default MyMap;
