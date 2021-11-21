import { useState, useEffect } from 'react';
import getData from './api/dataFetch';
import style from './App.module.css';
import Map from './components/Map/Map';
import MapRoute from './components/MapRoute/MapRoute';
import Maps from './components/Maps/Maps'
import Header from './components/Header/Header'
import { useSelector } from 'react-redux';
import RoadList from './components/RoadList/RoadList';

function App() {
  const [bikeStations, setBikeStations] = useState([])
  const [bikeAvailable, setBikeAvailable] = useState([])
	const placeData = useSelector(state => state.place)
  const routeData = useSelector(state => state.roadSelect);
  const stationOrRoad = useSelector(state => state.stationOrRoad)
  const [stationDisplay, setStationDisplay] = useState(null)
  const [roadDisplay, setRoadDisplay] = useState(null)
  // console.log(stationOrRoad)

  useEffect(() => {
    if (stationOrRoad === 'station') {
      setStationDisplay(style.station_dispaly) 
      setRoadDisplay(style.road_not_display)
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
    } else {
      setStationDisplay(style.station_not_display) 
      setRoadDisplay(style.road_display)
    }

  }, [placeData, routeData]);

  return (
    <div className={style.container}>
      <Header style={style.header}></Header> 
      {/* <div className={style.map + ' ' + stationOrRoad === 'station' ? style.station_display: ''}>  */}
      {/* <div className={style.map + ' ' + (stationDisplay)}> */}
        <Maps bikeAvailable={bikeAvailable} bikeStations={bikeStations}/>
      {/* </div> */}

      {/* <div className={style.map + " " + (roadDisplay) }> */}

{/* <div className={style.map}> */}

        {/* <MapRoute route={routeData}/> */}

{/* </div> */}
      {/* </div> */}
      <RoadList/>
    </div>
  );
}

export default App;
