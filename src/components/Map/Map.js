import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useEffect, useRef } from 'react'
import style from './Map.module.css'
// 引入 leaflet.markercluster
import "leaflet.markercluster/dist/MarkerCluster.css"
import "leaflet.markercluster/dist/MarkerCluster.Default.css"
import "leaflet.markercluster";
import { useSelector } from "react-redux"


function Map(props) {
	const data = props.data;
	const mapContainer = useRef();


	useEffect(() => {
		if (data === null || data.length === 0) return null;
		const map = L.map(mapContainer.current, {
			center: [data[0].StationPosition.PositionLat, data[0].StationPosition.PositionLon], 
			zoom: 16 
		}); 
		
		const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; 
		L.tileLayer(osmUrl, { 
			attribution: 
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', 
		}).addTo(map); 
		
		var greenIcon = new L.Icon({ 
			iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
			shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
			iconSize: [25, 41], 
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowSize: [41, 41] 
		}); 
		
		var markers = L.markerClusterGroup();

		// data.forEach(item => { 
		// 	L.marker([item.StationPosition.PositionLat, item.StationPosition.PositionLon], {icon: greenIcon}).addTo(map) 
		// 	.bindPopup(`<h1>${item.StationAddress.Zh_tw}</h1>`) 
		// }) 

		data.map(item => L.marker([item.StationPosition.PositionLat, item.StationPosition.PositionLon], {icon: greenIcon})
		.bindPopup(`<h1>${item.StationAddress.Zh_tw}</h1>`))
		.forEach(item => markers.addLayer(item))

		map.addLayer(markers)

		           



		// unmount map function 
		return ()=> map.remove(); 
	}, [data]);

	return (
		 <div className={style.container} 
		 ref={el => mapContainer.current = el}> 
		 </div>
	)
}
// 	if (Object.keys(props.data).length !== 0) { 
// 		console.log('in')
// 		let map = L.map('map', { 
// 			center: [data[0].StationPosition.PositionLat, data[0].StationPosition.PositionLon], 
// 			zoom: 16 
// 		});

// 	const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; 
// 	L.tileLayer(osmUrl, { 
// 		attribution: 
// 		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', 
// 	}).addTo(map);

// 	var greenIcon = new L.Icon({
//   iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41]
// });

// 	data.forEach(item => {
// 		L.marker([item.StationPosition.PositionLat, item.StationPosition.PositionLon], {icon: greenIcon}).addTo(map)
// 		.bindPopup(`<h1>${item.StationPosition.Zh_tw}</h1>`)
// 	})
// }
// useEffect(() => { 
	// 	let map = L.map('map', {
	// 		center: [pos, lon],
	// 		zoom: 16,
	// 	});

	// 	const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
	// 	 L.tileLayer(osmUrl, {
  //       attribution:
  //         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  //     }).addTo(map);

	// 		L.marker([pos, lon], {
	// 			icon: L.icon({
	// 				 iconUrl: "/location.png", 
	// 				 iconSize: [30, 30],
	// 			}),
	// 		}).addTo(map);

	// 	return () => {map.remove()}
	// }, [pos, lon])


export default Map;