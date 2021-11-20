import { useState, useEffect } from 'react';
import getData from './api/dataFetch';
import style from './App.module.css';
import Map from './components/Map/Map';
import Header from './components/Header/Header'
import { useSelector } from 'react-redux';
import RoadList from './components/RoadList/RoadList';

function App() {
  const [bikeStations, setBikeStations] = useState([])
  const [bikeAvailable, setBikeAvailable] = useState([])
	const placeData = useSelector(state => state.place)
  console.log(placeData)

  useEffect(() => {
    let stationData = null;
    let bikeAvailableData = null;
    async function fetchData() {
      await getData(`/v2/Bike/Station/${placeData}?$format=JSON`)
      .then(res => {
        stationData = res;
      })

      await getData(`v2/Bike/Availability/${placeData}?$format=JSON`)
      .then(res =>{
        bikeAvailableData = res
      })

      if (stationData && stationData.length === bikeAvailableData.length) {
        setBikeAvailable(bikeAvailableData)
        setBikeStations(stationData)
      }
      else {
        // alert('Not compare')
      }
    }

    fetchData()
  }, [placeData]);

  return (
    <div className={style.container}>
      <Header style={style.header}></Header> 
      <Map bikeAvailable={bikeAvailable} bikeStations={bikeStations}/>
      <RoadList/>
    </div>
  );
}

export default App;
