import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from './axios_instance';
import Header from './Header';


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
       
      <h1>React Frontend</h1>
     
      {data && <p>{data.message}</p>}
    </div>
  );
}

export default App;
