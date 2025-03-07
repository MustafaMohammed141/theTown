import "../Style/Header.css";

function Header() {
	return (
		<section class="Sec1">
			<nav class="navbar">
				<div class="nbTitle">
					<h3>Online</h3>
				</div>
				<div>
					<ul class="nbUl">
						<li class="nbLink">Introduction</li>
						<li class="nbLink">Our Work</li>
						<li class="nbLink">Contact Us</li>
					</ul>
				</div>
			</nav>
			<div class="Sec1-content">
				<h1>The Town</h1>
				<p>WebSite HTML5,CSS3</p>
				<p>
					by <span>Mustafa Abdulhafez</span>
				</p>
			</div>
		</section>
	);
}

export default Header;
