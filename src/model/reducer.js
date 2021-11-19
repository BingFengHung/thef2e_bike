const initState = {
	menuItemData: [
		"Like的發問",
		"Like的回答",
		"Like的文章",
		"Like的留言"
	],
	place: 'NewTaipei'
};

const itemReducer = (state = initState, action) => {
	switch(action.type) {

		case 'PlaceSelect': {
			const data = state;
			data.place = action.payload.place

			return data;
		}

		case 'ADD_ITEM': {
			const menuItemCopy = state.menuItemData.slice();
			console.log(menuItemCopy)
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