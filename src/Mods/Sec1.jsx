import "../Style/Sec1.css";

function Sec1() {
	return (
		<section className="sec1">
			<div className="sec1-imgContainer">
				<img className="sec1-img" src="public/introSection.jpg" />
			</div>
			<div className="sec1-textContainer">
				<h1>Introduction</h1>
				<p>
					The Town is <b>simple CSS template</b> built on HTML CSS and this is a little parallax layout that you can use for your website
				</p>
				<br />
				<p>
					please tell your friends about our site <a href="#">YourSite</a>. Thank you. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Itaque, nisi tenetur.
				</p>
				<button>Read More</button>
			</div>
		</section>
	);
}

export default Sec1;
