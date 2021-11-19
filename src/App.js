import { useState, useEffect } from 'react';
import getData from './api/dataFetch';
import style from './App.module.css';
import Map from './components/Map/Map';
import Header from './components/Header/Header'
import { useSelector } from 'react-redux';

function App() {
  const [data, setData] = useState([])
  const [bikeStations, setBikeStations] = useState([])
  const [bikeAvailable, setBikeAvailable] = useState([])
	const placeData = useSelector(state => state.place)

  useEffect(() => {
    let stationData = null;
    let bikeAvailableData = null;
    async function fetchData() {
      await getData(`/v2/Bike/Station/${placeData}?$format=JSON`)
      .then(res => {
        // setData(res)
        console.log('A')
        stationData = res;
      })

      await getData(`v2/Bike/Availability/${placeData}?$format=JSON`)
      .then(res =>{
        console.log('B')
        bikeAvailableData = res
      })

      console.log(stationData.length, bikeAvailableData.length)
      if (stationData.length === bikeAvailableData.length) {
        setBikeAvailable(bikeAvailableData)
        setBikeStations(stationData)
      }
      else {
        alert('Not compare')
      }
    }

    fetchData()
  }, [placeData]);

  return (
    <div className={style.container}>
      <Header style={style.header}></Header> 
      <Map bikeAvailable={bikeAvailable} bikeStations={bikeStations}/>
      {/* <Test value={data}/> */}
    </div>
  );
}

export default App;
