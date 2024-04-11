import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import axiosInstance from './axios_instance';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [clickedLocation, setClickedLocation] = useState(null);
  const [address, setAddress] = useState(null);

  const GetUserLocation = () => {
    const map = useMapEvents({
      click: (event) => {
        const { lat, lng } = event.latlng;
        setClickedLocation({ latitude: lat, longitude: lng });
      },
    });
    return null;
  };

  const fetchData = async () => {
    try {
      if (clickedLocation) {
        const response = await axiosInstance.post('http:/localhost:5000/api/data', clickedLocation);
        const { latitude, longitude } = clickedLocation;

        // Fetch address using reverse geocoding from OpenStreetMap Nominatim API
        const addressResponse = await axiosInstance.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`);
        const address = addressResponse.data.display_name;

        setAddress(address);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [clickedLocation]);

  const handleGetLocation = () => {
    if (!clickedLocation) {
      alert('Please click on the map to set a location.');
      return;
    }

    // Perform any action you need after getting the location
    console.log('Clicked Location:', clickedLocation);
    console.log('Address:', address);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <MapContainer center={[12.9716, 77.5946]} zoom={12} style={{ height: '800px', width: '50%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {clickedLocation && <Marker position={[clickedLocation.latitude, clickedLocation.longitude]}><Popup>Clicked Location</Popup></Marker>}
        <GetUserLocation />
      </MapContainer>
      <div>
        {clickedLocation && (
          <div>
            <p style={{ fontSize: '25px' }}>Your current latitude: {clickedLocation.latitude.toFixed(6)}</p>
            <p style={{ fontSize: '25px' }}>Your current longitude: {clickedLocation.longitude.toFixed(6)}</p>
            {address && <p style={{ fontSize: '25px' }}>Address: {address}</p>}
          </div>
        )}
        <button style={{ color: 'white', height: '40px', width: '90px', display: 'flex', justifyItems: 'center', alignItems: 'center', backgroundColor: '#3C3CF7', margin: '30px' }} onClick={handleGetLocation}>Get Location</button>
      </div>
    </div>
  );
};

export default MapComponent;
