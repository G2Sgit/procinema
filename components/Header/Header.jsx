import css from "./Header.module.scss";

import Navigation from "../Navigation/Navigation";

const Header = () => {
    return (
        <header className={css.header}>
            <Navigation />
        </header>
    )
}

export default Header;