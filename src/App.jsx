import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from './axios_instance';
import Header from './Header';
import Map from './Map'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axiosInstance.get('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
       <Header />
       <Map />
      <h1>React Frontend</h1>
     
      {data && <p>{data.message}</p>}
    </div>
  );
}

export default App;
