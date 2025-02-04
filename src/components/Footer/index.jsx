import './Footer.css'
import React, { useLayoutEffect, useState } from "react";

function Footer() {
	return (
		<div className="footer">
		<div className='footer--fields--container'>
		<div className="footer--fields" >
		<div className='endereço footer__block'>
		<div>
		<h2>Endereço</h2>
		<div className="paragraphs--footer">
		<p>RUA PREFEITO CHAGAS, n° 212 - CENTRO</p>
		<br></br>
		<h2>Horario de Atendimento</h2>
		<p>Segunda a Sexta das 9h as 18h</p>
		<p>Sábado, das 9h as 17h</p>
		</div>
		<div className="paragraphs--footer--mobile">
		<p><b>RUA PREFEITO CHAGAS,</b><br></br> n° 212 - <b>CENTRO</b></p>
		<h2>Horario de Atendimento</h2>
		<p>Segunda a Sexta das 9h as 18h</p>
		<p>Sábado, das 9h as 17h</p>			
		</div>
		</div>
</div>
		<div className="footer__second_col footer__block">
		<div className='contato f--field'>
		<h2>CONTATO</h2>

		<div>
		<a href="https://api.whatsapp.com/send/?phone=553599236423&type=phone_number&app_absent=0" className='wpp'>WHATSAPP COMERCIAL: <span>(35) 9 9923-6423</span></a>
		<a href="https://api.whatsapp.com/send/?phone=553599236423&type=phone_number&app_absent=0" className='wpp__mobile'><p>WHATSAPP COMERCIAL: </p><p>(35) 9 9865-2571</p></a>
		<div className="footer__follow_us">
		<h2>Nos siga:</h2>
		<a className="footer__social footer__fb" href="https://web.facebook.com/diveneza">
		<img src="assets/assis/icone6.svg" alt=""/>
		<p>/DIVENEZA</p>
		</a>
		<a className="footer__social footer__ig" href="https://www.instagram.com/divenezaotica">
		<img src="assets/assis/icone7.png" alt=""/>
		<p>@DIVENEZAOTICA</p>
		</a>
</div>
		</div>
		</div>

		</div>
		<div className="logo__footer footer__block">
		<img className="logo__footer__img" src="assets/assis/4-2-25/Logo-white.png" alt="logo ótica Diveneza"/>
		<div className="follow__us__mobile">

		<a className="footer__social footer__fb" href="https://www.facebook.com/oticaassisoficial">
		<img src="assets/assis/icone6.svg" alt=""/>
</a>

		<a className="footer__social footer__ig" href="https://www.instagram.com/otica.assis/">
		<img src="assets/assis/icone7.png" alt=""/>
</a>

		</div>
		</div>
		</div>
		</div>
		<div className="rights__reserved">
		<img src="assets/assis/icone5.svg"/>
		<p>2025 Ótica Diveneza. Todos os direitos reservados</p>
		</div>
		</div>
	);
}

export default Footer;
