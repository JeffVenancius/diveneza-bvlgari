import './Header.css'
import WppButton from '../Buttons/wppBtn'
import ScrollToBtn from '../Buttons/ScrollToBtn'

function Header(props) {
  return (
	<div className="header">
		<div className='header__nav'>
			<img src="./assets/assis/4-2-25/Logo.png" alt="Ótica Diveneza logo"></img>
			<div className='header__nav--menu'>
				<ScrollToBtn nome="Feminino" categoria="FEMININO--OCULOS_DE_GRAU"/>
				<ScrollToBtn nome="Masculino" categoria="MASCULINO--OCULOS_DE_GRAU"/>
				<a href="https://api.whatsapp.com/send/?phone=553598652571&type=phone_number&app_absent=0"><button>Fale conosco</button></a>
			</div>
		</div>
		<div className="header-banner" style={{...props.headerStyle, backgroundRepeat: "no-repeat"}}>
		<div>
		<img src="./assets/Bvlgari.svg" alt="Bvlgari"/>
		<p>A coleção de óculos Bvlgari reflete a beleza feminina, realçando as facetas da feminilidade.</p>
		<p>Uma curadoria especializada em óculos que são verdadeiras jóias.</p>
		<button><a>Saiba mais!</a></button>
</div>
		</div>
	</div>
  );
}

export default Header;

			// <img loading="lazy" src="./assets/capa.png" alt="" style={props.imgStyle}/>
