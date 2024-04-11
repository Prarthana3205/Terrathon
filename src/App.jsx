import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios here
import axiosInstance from './axios_instance';
import Header from './Header';
import MapComponent from './MapComponent';
import PH from './pH';
import BOD from './BOD'
import Manganese from './manganese';
import DO from './DO';
import Iron from './iron';
import Nitrate from './Nitrates';
import Turbidity from './Turbidity';
import Bicarbonate from './Bicarbonate';
import Chloride from './chlorides';
import Zinc from './Zinc';
import COD from './COD';
import Nickel from './Nickel';
import Hardness from './Hardness';
import Sodium from './Sodium';
import TDS from './TDS';
import Phosphate from './Phosphate';
import Chromium from './Chromium';
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https:/localhost:5000/api/data'); 
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
      <div>
      <PH />
      </div>
      <BOD />
      <Manganese />
      <DO />
      <Iron />
      <Nitrate />
      <Turbidity />
      <Bicarbonate />
      <Chloride />
      <Zinc />
      <COD />
      <Nickel />
      <Hardness />
      <Sodium />
      <TDS />
      <Phosphate />
      <Chromium />
      {data && <p>{data.message}</p>}
    </div>
  );
}

export default App;
