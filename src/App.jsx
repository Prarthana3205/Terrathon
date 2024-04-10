import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios here
import axiosInstance from './axios_instance';
import Header from './Header';
import MapComponent from './MapComponent';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('/api/data', { latitude: 123, longitude: 456 }); // Replace 123 and 456 with actual latitude and longitude values
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <MapComponent />
      <h1>React Frontend</h1>
      {data && <p>{data.message}</p>}
    </div>
  );
}

export default App;
