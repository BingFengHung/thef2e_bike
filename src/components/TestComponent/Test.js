import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Test(props) {
	const menuItemData = useSelector(state => state.menuItemData)
	const placeData = useSelector(state => state.place)
	console.log(menuItemData)
	return (
		<div>
			{props.value}
			{menuItemData}
			{placeData}
		</div>

	)
}

export default Test;