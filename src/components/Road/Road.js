import { Fragment } from "react";
import style from './Road.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

const Road = ({data}) => {
	const dispatch = useDispatch();
	function handleRoadClick() {
		dispatch({
			type: 'RoadSelect',
			payload: { roadSelect: data }
		})
	}

	return (
		<div className={style.container} onClick={handleRoadClick}>
			<p className={style.header}>{data.RouteName}</p>

			<Fragment>
				{data.Direction ? <p>方向：{data.Direction}</p> : null}
			</Fragment>
			{/* <p>方向：{data.Direction ? data.Direction: '未知'}</p> */}

			<div className={style.station}>
				<p>起</p>
				<p>{data.RoadSectionStart}</p>
			</div>

			<div className={style.station}>
				<p>迄</p>
				<p>{data.RoadSectionEnd}</p>
			</div>


			<div className={style.location}>
				<p>總長：{data.CyclingLength/1000}KM</p>

				<div>
					<FontAwesomeIcon icon={faMapMarkerAlt}/>
					<p>{data.City} {data.Town}</p>
				</div>
			</div>
		</div>
	)
};

export default Road;