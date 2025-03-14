import { createRoot } from "react-dom/client";
import Header from "./Mods/Header";
import Sec1 from "./Mods/Sec1";
import "./Style/main.css";

createRoot(document.getElementById("root")).render(
	<div>
		<Header />
		<Sec1 />
	</div>
);
