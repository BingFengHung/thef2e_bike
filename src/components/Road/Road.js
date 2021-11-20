import { Fragment } from "react";

const Road = ({data}) => {
	console.log(data.Direction)
	return (
		<div>
			<p>車道名稱：{data.RouteName}</p>
			<Fragment>
				{data.Direction ? <p>方向：{data.Direction}</p> : null}
			</Fragment>
			{/* <p>方向：{data.Direction ? data.Direction: '未知'}</p> */}
			<p>總長：{data.CyclingLength}</p>
			<p>起：{data.RoadSectionStart}</p>
			<p>迄：{data.RoadSectionEnd}</p>
		</div>
	)
};

export default Road;