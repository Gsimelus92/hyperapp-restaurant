var companyInfo = {
	title: 'Prime Steak Restaurant',
	phone: '(781) - 219 - 8652',
	location: 'Boston,MA'
};

var specialMenuData = [
	{
		title: 'Super BBQ Grill No Smoke',
		description:
			'Fried eggs, Steak, baked potato or french fries, side of vegetables',
		price: 15
	},
	{
		title: 'Chicken Fingers',
		description:
			'Fried eggs, Steak, baked potato or french fries, side of vegetables',
		price: 20
	},
	{
		title: 'All American Hamburger',
		description:
			'Fried eggs, Steak, baked potato or french fries, side of vegetables',
		price: 18
	}
];

var reviewsData = [
	{
		company: 'The Food Nenwork',
		authour: 'Joe Bastiachi',
		authourInfo: 'Winner Of The Chef Masters',
		highlight: 'Best Restaurant in the Boston area!',
		review:
			'Yr slow-carb lumbersexual +1, bushwick intelligentsia kitsch kogi kale chips stumptown hoodie. XOXO everyday carry authentic, woke taxidermy marfa knausgaard migas pug venmo bitters kitsch DIY.'
	},
	{
		company: 'HBO',
		authour: 'Joe Bastiachi',
		authourInfo: 'Winner Of The Chef Masters',
		highlight: 'Best Restaurant in the Boston area!',
		review:
			'Yr slow-carb lumbersexual +1, bushwick intelligentsia kitsch kogi kale chips stumptown hoodie. XOXO everyday carry authentic, woke taxidermy marfa knausgaard migas pug venmo bitters kitsch DIY.'
	},
	{
		company: 'CWB',
		authour: 'Joe Bastiachi',
		authourInfo: 'Winner Of The Chef Masters',
		highlight: 'Best Restaurant in the Boston area!',
		review:
			'Yr slow-carb lumbersexual +1, bushwick intelligentsia kitsch kogi kale chips stumptown hoodie. XOXO everyday carry authentic, woke taxidermy marfa knausgaard migas pug venmo bitters kitsch DIY.'
	},
	{
		company: 'NBC',
		authour: 'Joe Bastiachi',
		authourInfo: 'Winner Of The Chef Masters',
		highlight: 'Best Restaurant in the Boston area!',
		review:
			'Yr slow-carb lumbersexual +1, bushwick intelligentsia kitsch kogi kale chips stumptown hoodie. XOXO everyday carry authentic, woke taxidermy marfa knausgaard migas pug venmo bitters kitsch DIY.'
	},
	{
		company: 'The New York Times',
		authour: 'Joe Bastiachi',
		authourInfo: 'Winner Of The Chef Masters',
		highlight: 'Best Restaurant in the Boston area!',
		review:
			'Yr slow-carb lumbersexual +1, bushwick intelligentsia kitsch kogi kale chips stumptown hoodie. XOXO everyday carry authentic, woke taxidermy marfa knausgaard migas pug venmo bitters kitsch DIY.'
	}
];

var randomQuoteData = [
	{
		author: 'Johny',
		quote:
			'Good Painting Is Like Good Cooking: It Can Be Tasted, But Not Explained.'
	},
	{
		author: 'John',
		quote: 'Good food.'
	},
	{
		author: 'Billy',
		quote: 'Wicked Good.'
	}
];

export const globalState = {
	count: 0,
	companyInfo,
	specialMenuData,
	reviewsData,
	randomQuoteData,
	reviewStatus: {
		currentReview: 0
	}
};
