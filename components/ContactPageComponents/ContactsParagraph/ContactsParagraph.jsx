import css from "./ContactsParagraph.module.scss";

const ContactsParagraph = ({ text }) => {
    return (
        <p className={css.text}>{text}</p>
    )
}

export default ContactsParagraph;