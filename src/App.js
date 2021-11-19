import { useState, useEffect } from 'react';
import getData from './api/dataFetch';
import style from './App.module.css';
import { placeList } from './data/places';
import Map from './components/Map/Map';
import Header from './components/Header/Header'
import EventBus from './utils/EventBus';
import Test from './components/TestComponent/Test';
import { useSelector } from 'react-redux';

function App() {
  const [data, setData] = useState([])
	const placeData = useSelector(state => state.place)

  useEffect(() => {
      getData(`/v2/Bike/Station/${placeData}?$format=JSON`)
      .then(res => {
        console.log('in')
        setData(res)
      })
  }, [placeData]);

  return (
    <div className={style.container}>
      <Header style={style.header}></Header> 
      <Map data={data}/>
      {/* <Test value={data}/> */}
    </div>
  );
}

export default App;
