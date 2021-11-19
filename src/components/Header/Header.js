import style from './Header.module.css'
import { placeList } from '../../data/places';
import  EventBus  from '../../utils/EventBus';
import { useDispatch } from 'react-redux';

const Header = (props) => {
	const placeOptions = placeList.map((i, idx) => <option key={idx} value={i[1]}>{i[0]}</option>)
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
				<select onChange={handleChange}> 
					<option disabled selected value>租車/還車</option>
					{placeOptions}
				</select>
			</div>

			{/* <div>
				<select> 
					<option disabled selected value>自行車道</option>
					{placeOptions}
				</select>

			</div> */}
		</div>
	)
}

export default Header;