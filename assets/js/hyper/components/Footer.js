import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
	return (
		<footer>
			<div class="container">
				<nav class="menu">
					<a href="#">Our Story</a>
					<a href="#">Reviews</a>
					<a href="#">Special Menu</a>
					<a href="#">Reservations</a>
					<a href="#">Contact US</a>
				</nav>

				<ul class="social-media">
					<li>
						<a href="https://www.facebook.com" target="new">
							<i class="fab fa-facebook-square"></i>
						</a>
					</li>
					<li>
						<a href="https://www.twitter.com" target="new">
							<i class="fab fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="https://www.google.com" target="new">
							<i class="fab fa-google-plus-g"></i>
						</a>
					</li>
					<li>
						<a href="https://www.youtube.com" target="new">
							<i class="fab fa-youtube-square"></i>
						</a>
					</li>
				</ul>

				<div class="copyright">© 2019 Copyright</div>
			</div>
		</footer>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
