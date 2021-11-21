import "leaflet/dist/leaflet.css"
import L from 'leaflet'
import style from './MapRoute.module.css'
import { useEffect, useRef } from "react"
import getData from "../../api/dataFetch"

const MapRoute = ({ route }) => {
	const mapContainers = useRef()

	useEffect(() => {
		if (route === null) return null;

		const routes = route.Geometry.replace("MULTILINESTRING ", '').replace('((', '').replace('))', '').trim();

		const path = routes.split(',').map(i => 
			{
				let data = i.split(' ')
				let arr = []
				arr.push(Number(data[1]))
				arr.push(Number(data[0]))
				return arr;
			})
		const map = L.map(mapContainers.current, {
			center: [path[0][0], path[0][1]],
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

		L.marker([path[0][0], path[0][1]], {icon: greenIcon}).addTo(map)
    .bindPopup('<h1>Start</h1>')
    .openPopup();

		L.marker([path[path.length -1][0], path[path.length - 1][1]], {icon:greenIcon}).addTo(map)
    .bindPopup('<h1>End</h1>')
    .openPopup();

		//From documentation http://leafletjs.com/reference.html#polyline 
		// create a red polyline from an arrays of LatLng points 
		var latlngs = path;
		var polyline = L.polyline(latlngs, {
			color: 'red'
		}).addTo(map);

		// // zoom the map to the polyline 
		 map.fitBounds(polyline.getBounds());

		return () => map.remove()
	}, [route])

	return (
		<div className={style.container}
			ref={el => mapContainers.current = el}>

		</div>
	)
}

export default MapRoute;