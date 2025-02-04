import Banner from '../index.jsx'
import React, { useLayoutEffect, useState } from "react";
import './Banner3.css'

function Banner3() {
	const queryParameters = new URLSearchParams(window.location.search)
	const phone = queryParameters.get("wpp") ? queryParameters.get("wpp") : "98652571"
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	const img = size[0] < 750 ? "./assets/assis/banner2.png" : size[0] < 1250 ? "./assets/assis/banner2.png" : "./assets/assis/banner2.png"

	let text = (
		<div>
		<h2 className="banner__title">Coleção nova</h2>
		<h2 className='banner__subtitle'>Óculos masculinos</h2>
		</div>
	)
  return (
		<>
		<Banner className="banner__3"
							>
		<div className='banner--content--txt'>
		<h2>Serpenti High End</h2>
		<p>Inspirada na coleção Serpenti da Bvlgati Jóias, esta linha combina sofisticação artesanal com técnicas refinadas de manufatura. Produzidas com ouro 24K chapado a mão (5 microns), as peças são adornadas com zircônias, ônix e outras pedras preciosas, cuidadosamente fixadas por fundição.</p>
</div>
		<div class="saiba-mais">
		<a href={"https://wa.me/5535" + phone}>Saiba mais!</a>
</div>
							</Banner>
		<div>
		</div>
		</>
  );
}

export default Banner3;
