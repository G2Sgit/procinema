import css from "./Container.module.scss";

const Container = function({ children,content }) {
    return (
        <div className={content?css.containerContent:css.container}>
            {children}
        </div>
    )
}

export default Container