const ButtonBlue = props => <button className={props.classAdd}><span>{props.info}</span></button>

const Advantages = props => (
				<div className="features-slider_item" onClick={props.myClick}>
								<div className="features-img" style={{backgroundImage: `url(./images/${props.image}.svg)`}} />
								<div className="features-feature">{props.advantage}</div>
					</div>
)

class RenderJSX extends React.Component {
	constructor() {
		super();
		this.state = {
			counter: 1
		}

	}

	changeCouter = () => {
		this.setState({
			counter: (() =>{
				if (this.state.counter > 3) {
					return 1
				}
				else {
					return this.state.counter + 1
				}
			})()
		})
	}

	render () {
		return (
  <div>
		<header>
			<div className="wrapper">
				<div className="header">
					<a href="#">
						<div className="header-logo"/>
					</a>
					<a href="tel:888" className="header-phone" />
					<div className="header-phonelink"><a href="tel:7(962)556-1234">+7(962)556-1234</a></div>
				</div>
			</div>
		</header>
		<main>
			<div className="wrapper">
				<div className="main">
					<h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
					<div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику,
						вебмастеру сгенерировать несколько абзацев более.
					</div>
					<ButtonBlue classAdd='btn main-btn' info='Подробнее'/>
				</div>
			</div>
		</main>
		<section className="features">
			<div className="wrapper">
				<div className="features-wrapper">
					<h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
					<div className="features-subhead">О нас</div>
					<div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
						сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
						оратору отточить.
					</div>
					<div className="features-slider">
						<div className="features-slider_items">
							<Advantages image={this.state.counter} advantage = 'Первое целевое преимущество' myClick={this.changeCouter}/>
							<Advantages image='2' advantage = 'Второе целевое преимущество'/>
							<Advantages image='3' advantage = 'Третье целевое преимущество'/>
							<Advantages image='4' advantage = 'Четвертое целевое преимущество' />
						</div>
						<button className="features-slider-arrow features-slider-prev">
							<svg width={9} height={16} xmlns="http://www.w3.org/2000/svg">
								<path
									d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
								</path>
							</svg>
						</button>
						<button className="features-slider-arrow features-slider-next">
							<svg width={9} height={16} xmlns="http://www.w3.org/2000/svg">
								<path
									d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
								</path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
		<section className="contact">
			<div className="wrapper">
				<div className="contact-wrapper">
					<h2 className="contact-title">Остались вопросы?</h2>
					<div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
					<form action="../mailer.smart.php" className="contact-form"><input type="text" placeholder="Ваше имя" />
						<input type="tel" placeholder="Телефон" /> <input type="email" placeholder="E-mail" />
						<ButtonBlue classAdd="btn contact-btn" info='Позвоните мне'/>
					</form>
					<div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
					</div>
				</div>
			</div>
		</section>
		<footer>
			<div className="footer">
				<div className="footer-logo" />
				<div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
				<a href="tel:888" className="footer-phone" />
				<div className="footer-websurfer"><span className="footer-websurfer_build">Сделано</span> <a href="#">Ваше
						имя</a></div>
				<div className="footer-phonelink"><a href="tel:888">+7(962)556-1234</a></div>
			</div>
		</footer>
	</div>
);
	}

} 


ReactDOM.render(<RenderJSX/>, document.getElementById('root'));