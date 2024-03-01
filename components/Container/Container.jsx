import css from "./Container.module.scss";

const Container = function({ children,content }) {
    return (
        <section className={content?css.containerContent:css.container}>
            {children}
        </section>
    )
}

export default Container