import css from "./Container.module.scss";

const Container = function({ children }) {
    return (
        <div className={css.container}>
            {children}
        </div>
    )
}

export default Container