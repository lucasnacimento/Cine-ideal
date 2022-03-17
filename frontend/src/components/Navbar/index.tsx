import { ReactComponent as LogoIcon } from "../../assets/img/logo.svg";
import "./styles.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="ideal-nav-content">
          <LogoIcon id="icon-style" />
          <ul className="list">
            <li className="item"><a href="/">Inicio</a></li>
            <li className="item"><a href="/">Contato</a></li>
            <li className="item"><a href="/">Avaliações</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
