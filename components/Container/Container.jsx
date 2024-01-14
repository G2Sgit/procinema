import css from "./Container.module.scss";

const Container = function({ children,dark }) {
    return (
        <div className={dark?css.containerDark:css.container}>
            {children}
        </div>
    )
}

export default Container