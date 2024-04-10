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
<<<<<<< HEAD
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="src/assets/zoro.jpeg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
=======
    <div className="App">
       <Header />
       
      <h1>React Frontend</h1>
     
      {data && <p>{data.message}</p>}
    </div>
  );
>>>>>>> refs/remotes/origin/main
}

export default App;
