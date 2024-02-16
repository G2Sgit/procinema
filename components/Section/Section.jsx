import css from "./Section.module.scss";

const Section = ({ children,topSection }) => {
    return (
        <section className={topSection?`${css.topSection}`:`${css.section}`}>{children}</section>
    )

}

export default Section;