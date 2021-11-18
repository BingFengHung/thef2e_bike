import style from './Header.module.css'

const Header = (props) => {
	return (
		<div className={[style.container, props.style]}>
			<p className={style.logo}>Go Bike</p>
		</div>
	)
}

export default Header;