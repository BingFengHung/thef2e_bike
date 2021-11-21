import style from './Header.module.css'
import { bikeStations, bikeRoads } from '../../data/places';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking } from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {
	const stationsOptions = bikeStations.map((i, idx) => <option key={idx} value={i[1]}>{i[0]}</option>)
	const roadOptions = bikeRoads.map((i, idx) => <option key={idx} value={i[1]}>{i[0]}</option>)

	const dispatch = useDispatch();

	function handleChange(e) {
		// EventBus.dispatch('rentBike', e.target.value);
		// dispatch({ 
		// 	type: 'ADD_ITEM', 
		// 	payload: {itemNew: e.target.value}	
		// });

		dispatch({
			type: 'PlaceSelect',
			payload: { place: e.target.value }
		})
	}

	function handleRoadSelect(e) {
		dispatch({
			type: 'RoadPlace',
			payload: {road: e.target.value}
		})
	}

	return (
		<div className={style.container + " " +(props.style)}>
			<div className={style.logo}>
				<FontAwesomeIcon className={style.icon} icon={faBiking}/>
				<p>Go Bike</p>
			</div>
			<div>
				<div className={style.selectContainer}> 
				<div className={style.items}>
					<p>租車還車站點：</p> 
					<select onChange={handleChange}>
						<option disabled selected value>請選擇站點</option>
						{stationsOptions}
					</select> 
				</div>
				
				<div className={style.items}>
					<p>自行車道：</p>
					<select onChange={handleRoadSelect}>
						<option disabled selected value>請選擇車道</option>
						{roadOptions}
					</select>
					</div>
				</div> 

			</div>

		</div>
	)
}

export default Header;