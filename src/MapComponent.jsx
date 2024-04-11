// MapComponent.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const MapComponent = () => {
  const [clickedLocation, setClickedLocation] = useState(null);

  const GetUserLocation = () => {
    const map = useMapEvents({
      click: (event) => {
        const { lat, lng } = event.latlng;
        setClickedLocation({ latitude: lat, longitude: lng });
      },
    });
    return null;
  };
  const handleGetLocation = () => {
    if (clickedLocation) {
      fetch('http://localhost:5001/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(clickedLocation) // Ensure clickedLocation is included in the body
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error occurred while saving location');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        alert(data.message);
      })
      .catch(error => {
        console.error('Error:', error);
        alert(error.message);
      });
    } else {
      alert('Please click on the map to set a location.');
    }
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
            <p>Your current latitude: {clickedLocation.latitude.toFixed(6)}</p>
            <p>Your current longitude: {clickedLocation.longitude.toFixed(6)}</p>
          </div>
        )}
        <button style={{
          color:'white',height:'40px',width:'90px',display:'flex',justifyItems:'center',alignItems:'center',backgroundColor:'#3C3CF7',margin:'30px'
      }}onClick={handleGetLocation}>Get Location</button>
      </div>
    </div>
  );
};

export default MapComponent;
