import style from './Header.module.css'
import { bikeStations, bikeRoads } from '../../data/places';
import { useDispatch } from 'react-redux';

const Header = (props) => {
	const stationsOptions = bikeStations.map((i, idx) => <option key={idx} value={i[1]}>{i[0]}</option>)
	const roadOptions = bikeRoads.map((i, idx) => <option key={idx} value={i[1]}>{i[0]}</option>)

	const dispatch = useDispatch();

	function handleChange(e) {
		// EventBus.dispatch('rentBike', e.target.value);
		dispatch({ 
			type: 'ADD_ITEM', 
			payload: {itemNew: e.target.value}	
		});

		dispatch({
			type: 'PlaceSelect',
			payload: {place: e.target.value}
		})
	}

	return (
		<div className={style.container + " " +(props.style)}>
			<p className={style.logo}>Go Bike</p>

			<div>
				<div className={style.selectContainer}> 
				<div className={style.items}>
					<p>Bike Station：</p> 
					<select onChange={handleChange}>
						<option disabled selected value>租車/還車</option>
						{stationsOptions}
					</select> 
				</div>
				
				<div className={style.items}>
					<p>自行車道：</p>
					<select>
						<option disabled selected value>自行車道</option>
						{roadOptions}
					</select>
					</div>
				</div> 

			</div>

		</div>
	)
}

export default Header;