import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useEffect, useRef, useState} from 'react'
import style from './Map.module.css'
import getData from "../../api/dataFetch"


function Map(props) {
	const data = props.data;
	const mapContainer = useRef();
	const [map, setMap] = useState();

	useEffect(() => {
		if (Object.keys(data).length === 0) return null;
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
		
		data.forEach(item => { 
			L.marker([item.StationPosition.PositionLat, item.StationPosition.PositionLon], {icon: greenIcon}).addTo(map) 
			.bindPopup(`<h1>${item.StationAddress.Zh_tw}</h1>`) 
		}) 

		// unmount map function 
		return ()=> map.remove(); 
	}, [data]);

	if (Object.keys(data).length === 0) return null;

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