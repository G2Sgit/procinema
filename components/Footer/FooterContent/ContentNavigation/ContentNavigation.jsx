import css from "../FooterContent.module.scss";
const ContentNavigation = () => {
  return (
    <div className={css.footerNavWrapper}>
      <h3>Navigation</h3>
      <ul className={css.footerNavList}>
        <li className={css.link}>
          <a href="/">Home</a>
        </li>
        <li className={css.link}>
          <a href="/postServices">Post services</a>
        </li>
        <li className={css.link}>
          <a href="/works">Works</a>
        </li>
        <li className={css.link}>
          <a href="/pricing">Pricing</a>
        </li>
        <li className={css.link}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default ContentNavigation;