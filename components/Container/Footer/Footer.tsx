import Container from "../Container";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.icons}>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
          </div>
          <div className={styles.author}>
            <p>© 2023 Matus. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
