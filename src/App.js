import { useState, useEffect } from 'react';
import getData from './api/dataFetch';
import './App.css';
import Map from './components/Map/Map';
import { placeList } from './data/places';

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    getData(`/v2/Bike/Station/${placeList[1][1]}?$format=JSON`)
    .then(res => {
      console.log(res)
      setData(res)
      //data = res;
    })
  }, []);

  return (
    <div className="App">
      <Map data={data}/>
    </div>
  );
}

export default App;
