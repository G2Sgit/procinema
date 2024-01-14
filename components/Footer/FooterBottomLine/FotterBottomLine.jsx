import Container from "@/components/Container/Container";
import css from "./FotterBottomLine.module.scss";

const FooterBottomLine = () => {
  return (
    <div className={css.bottomLineWrapper}>
      <Container>
        <div className={css.footerBottomLine}>
          <ul>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Refund Policy</a>
            </li>
            <li>
              <a href="/">Cookie Policy</a>
            </li>
          </ul>
          <p>© Procinema 2023</p>
        </div>
      </Container>
    </div>
  );
};

export default FooterBottomLine;