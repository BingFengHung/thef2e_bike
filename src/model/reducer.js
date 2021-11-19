const initState = {
	menuItemData: [
		"Like的發問",
		"Like的回答",
		"Like的文章",
		"Like的留言"
	],
	place: ''
};

const itemReducer = (state = initState, action) => {
	switch(action.type) {

		case 'PlaceSelect': {
			return { 
				menuItemData: state.menuItemData,
				place: action.payload.place 
			}
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