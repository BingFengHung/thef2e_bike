const initState = {
	menuItemData: [
		"Like的發問",
		"Like的回答",
		"Like的文章",
		"Like的留言"
	],
	place: 'NewTaipei',
	road: 'NewTaipei'
};

const itemReducer = (state = initState, action) => {
	console.log(state)
	switch(action.type) {
		case 'PlaceSelect': {
			console.log(state)
			const data = state;
			data.place = action.payload.place
			return data;
		}

		case 'RoadPlace': {
			const data = state;
			data.road = action.payload.road
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