export const actions = {
	reviewLeftClicked,
	reviewRightClicked,
	intro,
	showMenu
};

function reviewLeftClicked(state, actions) {
	return {
		reviewStatus: {
			currentReview: state.reviewStatus.currentReview - 1
		}
	};
}

function reviewRightClicked(state, actions) {
	return {
		reviewStatus: {
			currentReview: state.reviewStatus.currentReview + 1
		}
	};
}

function showMenu() {}

function intro(state, actions) {
	console.log('Just ran my first action');
	return { count: state.count + 1 };
}
