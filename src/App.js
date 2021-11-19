import { useState, useEffect } from 'react';
import getData from './api/dataFetch';
import style from './App.module.css';
import { placeList } from './data/places';
import Map from './components/Map/Map';
import Header from './components/Header/Header'
import EventBus from './utils/EventBus';
import Test from './components/TestComponent/Test';

function App() {
  const [data, setData] = useState('')

  // EventBus.on('rentBike', (val) => {
  //   // console.log('i')
  //   // getData(`/v2/Bike/Station/${val}?$format=JSON`)
  //   // .then(res => {
  //   //   setData(res)
  //   //   //data = res;
  //   // })
  //   console.log('in')
  //   setData(val)
  // })
  

  // useEffect(() => {
  //     getData(`/v2/Bike/Station/${placeList[1][1]}?$format=JSON`)
  //     .then(res => { 
  //       setData(res) 
  //     })

  //   return () => {
  //     EventBus.remove('rentBike')
  //   }
  // }, []);

  return (
    <div className={style.container}>
      <Header style={style.header}></Header> 
      {/* <Map data={data}/> */}
      <Test value={data}/>
    </div>
  );
}

export default App;
