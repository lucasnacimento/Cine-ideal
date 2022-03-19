import "./styles.css";
import { ReactComponent as IconLinkedin } from "../../assets/img/icon-linkedin.svg";
import { ReactComponent as IconGithub } from "../../assets/img/icon-github.svg";
import { ReactComponent as IconInstagram } from "../../assets/img/icon-instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-area">
        <ul className="social-list">
          <li className="social-icon">
            <a href="https://www.linkedin.com/in/lucasnascimento7" target={"_blank"} rel="noreferrer">
              <IconLinkedin />
            </a>
          </li>
          <li className="social-icon">
            <a href="https://github.com/lucasnacimento" target={"_blank"} rel="noreferrer">
              <IconGithub />
            </a>
          </li>
          <li className="social-icon">
            <a href="https://www.instagram.com/lucasnaciimento" target={"_blank"} rel="noreferrer">
              <IconInstagram />
            </a>
          </li>
        </ul>
        <p>Follow me on social media</p>
      </div>

      <div className="space-div"></div>

      <div className="content-design">
        <p>Design by</p>
        <h3>Lucas Nascimento Lopes</h3>
        <span>&copy; 2022</span>
      </div>
    </footer>
  );
}

export default Footer;
