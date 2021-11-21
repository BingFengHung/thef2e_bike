const initState = {
	// menuItemData: [
	// 	"Like的發問",
	// 	"Like的回答",
	// 	"Like的文章",
	// 	"Like的留言"
	// ],
	place: 'NewTaipei',
	road: 'NewTaipei',
	roadSelect: null,
	stationOrRoad: 'station'
};

const itemReducer = (state = initState, action) => {
	switch(action.type) {
		case 'PlaceSelect': {
			const data = Object.assign({}, state);
			data.place = action.payload.place
			data.stationOrRoad = 'station';
			return data;
		}

		case 'RoadPlace': {
			const data = Object.assign({}, state);
			// const data = state;
			data.road = action.payload.road
			data.stationOrRoad = 'road';
			return data;
		}

		case 'RoadSelect': {
			const data = Object.assign({}, state);
			data.roadSelect = action.payload.roadSelect
			data.stationOrRoad = 'road';
			return data;
		}

		 case 'ADD_ITEM': {
		 	const menuItemCopy = state.menuItemData.slice();
		 	return {
		 		menuItemData: [action.payload.itemNew].concat(menuItemCopy)
		 	};
    }

		case 'CLEAN_ITEM': {
			return { menuItemData: [] };
		}

		default:
			return state;
	}
}

export { itemReducer };