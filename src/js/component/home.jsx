import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");

	return (
		<div className="d-flex align-items-center flex-column hv-100">
			<div className="trafficTop"></div>
			<div className="containerMain d-flex align-items-center flex-column">
				<div className={`redCircle ${color=="red" ? "brightLight" : ""}` } onClick={() => setColor("red")}></div>
				<div className={`yellowCircle ${color=="yellow" ? "brightLight" : ""}`} onClick={() => setColor("yellow")}></div>
<				div className={`greenCircle ${color=="green" ? "brightLight" : ""}`} onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
};

export default Home;

//condicion ? casoPositivo : casoNegativo

