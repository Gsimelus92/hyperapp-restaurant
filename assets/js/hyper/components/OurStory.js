import { h, app } from 'hyperapp';

export default function OurStory({ state, actions }) {
	return (
		<section id="OurStory">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h5 class="comp-title">Our Story</h5>
						<h2>Cooking is the art of adustment</h2>
						<p>
							Yr slow-carb lumbersexual +1, bushwick intelligentsia kitsch kogi
							kale chips stumptown hoodie. XOXO everyday carry authentic, woke
							taxidermy marfa knausgaard migas pug venmo bitters kitsch DIY.
							Vegan quinoa post-ironic typewriter put a bird on it la croix
							pitchfork pop-up knausgaard deep v photo booth woke. Brooklyn
							tattooed franzen, farm-to-table glossier salvia sartorial sriracha
							meditation vegan art party pickled small batch. Artisan shaman
							tumblr, williamsburg pork belly activated charcoal listicle
							mixtape flannel chillwave godard crucifix retro tacos woke. YOLO
							DIY gochujang, pabst authentic cronut tacos wolf godard shaman
							forage seitan kitsch literally. Everyday carry godard af{' '}
						</p>
						<div class="quote">
							<i>"The best steak in the toen of huntington"</i>-
							<strong>Thomas Eggsy</strong>
						</div>
						<a href="#" class="reserve-btn">
							Reserve
						</a>
					</div>
					<div class="col-md-6">
						<div class="video-img"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
