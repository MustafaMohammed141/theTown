import "../Style/Header.css";
import { useEffect } from "react";

function Header() {
	useEffect(() => {
		const nbLink = document.querySelectorAll(".nbLink");
		nbLink.forEach((Link) => {
			Link.addEventListener("click", function () {
				let Active = document.querySelector(".navActive");
				if (Link.classList.contains("navActive")) {
					return;
				} else {
					Active.classList.remove("navActive");
					Link.classList.add("navActive");
				}
			});
		});
	}, []);
	return (
		<section className="header">
			<nav className="navbar">
				<div className="nbTitle">
					<h3 className="nbLink">Online</h3>
				</div>
				<div>
					<ul className="nbUl">
						<li className="nbLink navActive">Introduction</li>
						<li className="nbLink">Our Work</li>
						<li className="nbLink">Contact Us</li>
					</ul>
				</div>
			</nav>
			<div className="header-content">
				<div>
					<h1 className="headerTitle">The Town</h1>
					<div className="headerTxt">
						<p>WebSite HTML5,CSS3</p>
						<p>
							by <span className="me">Mustafa Abdulhafez</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Header;
