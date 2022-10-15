import "./style.css";
import logo from "../../img/logo.png";
import nu from "../../img/index.svg";

function Index({setPage}) {
  function redirect () {
    setPage('home')
  }
  return (
    <div className="background-grey">
      <div className="container-index">
        <div className="infos">
          <div className="logo">
            <img src={logo} alt=""></img>
          </div>
          <h1 className="title-1">Centralize o controle das suas finanças</h1>
          <p id='info-title'>de forma rápida e segura</p>
          <button onClick={redirect} className="button-primary">Iniciar</button>
        </div>
        <div className="img">
          <img src={nu} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Index;
