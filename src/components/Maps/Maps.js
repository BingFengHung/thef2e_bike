import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useEffect, useRef } from 'react'
import style from './Maps.module.css'
// 引入 leaflet.markercluster
import "leaflet.markercluster/dist/MarkerCluster.css"
import "leaflet.markercluster/dist/MarkerCluster.Default.css"
import "leaflet.markercluster";
import { useSelector } from "react-redux"


const Maps = ({ bikeAvailable, bikeStations, select }) => {
	const available = bikeAvailable
	const stations = bikeStations;
	const sel = select;
	const stationOrRoad = useSelector(state => state.stationOrRoad);
	const routeSelect = useSelector(state => state.roadSelect);
	const mapContainer = useRef();

	useEffect(() => { 
		let map = null;
		if (stationOrRoad === "station") {
			if (stations === null || stations.length === 0) return null;
			map = L.map(mapContainer.current, {
				center: [stations[0].StationPosition.PositionLat, stations[0].StationPosition.PositionLon],
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

			stations.map((item, idx) => L.marker([item.StationPosition.PositionLat, item.StationPosition.PositionLon], { icon: greenIcon })
				.bindPopup(
					`<div> 
			<h1>${item.StationName.Zh_tw}</h1>
			<p>${item.StationAddress.Zh_tw}</p>
			<p>可租借數量${available[idx].AvailableRentBikes}</p>
			<p>可歸還數量${available[idx].AvailableReturnBikes}</p>
			</div>
			`
				))
				.forEach(item => markers.addLayer(item))

			map.addLayer(markers)
		} else {
			const routes = routeSelect.Geometry.replace("MULTILINESTRING ", '').replace('((', '').replace('))', '').trim();

			const path = routes.split(',').map(i => {
				let data = i.split(' ')
				let arr = []
				arr.push(Number(data[1]))
				arr.push(Number(data[0]))
				return arr;
			})

			map = L.map(mapContainer.current, {
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

			L.marker([path[0][0], path[0][1]], { icon: greenIcon }).addTo(map)
				.bindPopup('<h1>Start</h1>')
				.openPopup();

			L.marker([path[path.length - 1][0], path[path.length - 1][1]], { icon: greenIcon }).addTo(map)
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
		}

		// unmount map function 
		return () => map.remove();
	}, [stations, select]);

	return (
		<div className={style.container}
			ref={el => mapContainer.current = el}>
		</div>
	)
}

export default Maps;