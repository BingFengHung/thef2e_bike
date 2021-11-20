import style from './RoadList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Road from '../Road/Road';
import getData from '../../api/dataFetch';
import { useSelector } from 'react-redux';

function RoadList({props}) {
	const [isOpen, setIsOpen] = useState(false)
	const [display, setDisplay] = useState(style.container_close)
	const [roadList, setRoadList] = useState([])
	const placeData = useSelector(state => state.road)
	console.log(placeData, 'adsfafd')

	function menuOpen() {
		if (isOpen) {
			setDisplay(style.container_close)
			setIsOpen(false)
		} else {
			setDisplay(style.container_open)
			setIsOpen(true)
		}
	}

	useEffect(() => {
		getData(`/v2/Cycling/Shape/${placeData}?format=JSON`)
		.then(res => {
			const data = res.map((i, idx) => <Road key={idx} data={i}/>)
			setRoadList(data)
		})
	}, [placeData])

	return (
		<div className={style.container + ' ' + (display)}>
			<div className={style.wrapper}>
				<button className={style.menu} onClick={menuOpen}>
					<FontAwesomeIcon icon={faBars}/>
				</button> 

				<div className={style.menu_list}>
					<div className={style.roadContainer}>
						{roadList}
					</div>
				</div>
			</div>
		</div>
	)
}

export default RoadList