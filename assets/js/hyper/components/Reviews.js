import { h, app } from 'hyperapp';

export default function Reviews({ state, actions }) {
	var currentReview = function() {
		return (
			<div>
				<h5 class="comp-title">Reviews</h5>
				<h2>{state.reviewsData[state.reviewStatus.currentReview].company}</h2>
				<h4>{state.reviewsData[state.reviewStatus.currentReview].highlight}</h4>
				<p>{state.reviewsData[state.reviewStatus.currentReview].review}</p>
				<div class="author">
					<strong>
						{state.reviewsData[state.reviewStatus.currentReview].author}
					</strong>{' '}
					-{' '}
					<em>
						{state.reviewsData[state.reviewStatus.currentReview].authourInfo}
					</em>
				</div>
			</div>
		);
	};

	var leftClickBTN = function() {
		if (state.reviewStatus.currentReview == 0) {
			console.log('do nothing');
		} else {
			actions.reviewLeftClicked();
		}
	};

	var rightClickBTN = function() {
		if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {
			console.log('do nothing');
		} else {
			actions.reviewRightClicked();
		}
	};

	return (
		<section id="Reviews">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<div class="side-img">
							<img src="https://www.at-sunrice.com/assets/Uploads/Chef-Clement-REAL.jpg" />
						</div>
					</div>
					<div class="col-md-4">
						{currentReview()}
						<div class="arrows">
							<i
								onclick={leftClickBTN}
								class={`fa fa-arrow-left ${
									state.reviewStatus.currentReview > 0 ? 'ready' : ''
								}`}
								aria-hidden="true"
							></i>
							<i
								onclick={rightClickBTN}
								class={`fa fa-arrow-right ${
									state.reviewStatus.currentReview ==
									state.reviewsData.length - 1
										? ''
										: 'ready'
								}`}
								aria-hidden="true"
							></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
