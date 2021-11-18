import { useState, useEffect } from 'react';
import getData from './api/dataFetch';
import style from './App.module.css';
import { placeList } from './data/places';
import Map from './components/Map/Map';
import Header from './components/Header/Header'

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
    <div className={style.container}>
      <Header style={style.header}></Header> 
      <Map data={data}/>
    </div>
  );
}

export default App;
