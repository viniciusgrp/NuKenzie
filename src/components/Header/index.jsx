import './style.css'
import logo from '../../img/logoBlack.png'

function Header ({setPage}) {
    function redirect () {
        setPage('landing')
    }
    return (
        <header>
            <img src={logo} alt="" />
            <button onClick={redirect} className="button-grey">Início</button>
        </header>
    )
}

export default Header