import css from "./PageTitle.module.scss";

const PageTitle = ({ text }) => {
    return (
        <h1 className={css.title}>{text}</h1>
    )
}

export default PageTitle;