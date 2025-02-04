import './Card.css'
import WppBtn from '../Buttons/wppBtn';
import 'bootstrap/dist/css/bootstrap.css';

import { useState, useEffect } from 'react';

function ImgCarousel(props) {
	if (typeof props.img !== "string") {
		return <div class="card__img__colection">{props.img.map(e => <img style={{translate: `${-100 * props.currImg}%`}} alt={e} class="card__image__custom" src={e} />)}</div>
	} else {
		return <img alt={props.img} class="card__image__custom" src={props.img} />
	}
}


function Card(props) {
	const [currImg, setCurrImg] = useState(0)
  
	useEffect(() => {
		if (props.img === "sting") return
		const timedOut = setTimeout(() => {setCurrImg(currImg === props.img.length - 1 ? 0 : currImg + 1)}, 4000)
		return () => clearTimeout(timedOut)
	},[currImg, props.img])


	let formater = new Intl.NumberFormat('pt-BR', {
		style: "currency",
		currency: "BRL",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})
	let times = 1
	while (props.preco/times > 60 || times == 12) {
		times++
	}
	while (props.preco/times < 60) {
		times--
	}

	let precoFormatado = formater.format(props.preco/times)
	let price_option1 = times == 1 ? precoFormatado + " à vista" : times + "x de " + precoFormatado + " sem juros"
	let price_option2 =  times == 1 ? "" : "ou " + formater.format(props.preco) + " à vista"

  return (
		<div className="card__custom" style={{...props.propsStyle, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
			<ImgCarousel img={props.img} currImg={currImg} frameColor={props.frameColor} delay={props.delay} discount={props.discount}/>
			<div className="card--description">
	  			<div className="card__description-model">
				<h2 >{props.description}</h2>
				<h2>{props.modelo}</h2>
	  			</div>
				<WppBtn
					icone={false}
					mensagem= {props.btnMensagemPrefixo + props.description + ", modelo " + props.modelo + "."}
					texto="Eu quero!"
					btnStyle={{...props.btnStyle, width:"80%"}}
					iconeSize={props.iconeSize}
				/>
			</div>
    </div>
  );
}

export default Card;


				// <a href={"https://wa.me/553598254687?text=" + props.mensagem + props.produto} target="_blank" rel="noreferrer">
				// 	<button className="card--desciption--button">
				// 	<p><i class="fa fa-whatsapp" aria-hidden="true"></i> COMPRE AGORA</p></button></a>
			// </div>
//
//
//
//
				// <img loading='lazy' className="card--image--frame" src={"/assets/frame_" + props.frameColor.replace("#","") + ".png"} alt=""/>
//
//
//
					// <img loading="lazy" className="card--image" src={"/assets/" + props.img} alt={props.marca + " " + props.modelo}/>
//
//
				// <img loading='lazy' className="card--image--frame" src={"/assets/frame_" + props.frameColor.replace("#","") + ".png"} alt=""/>
