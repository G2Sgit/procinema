import css from "./WorkItem.module.scss";

const WorkItem = ({ url, heading, fiveK }) => {
  return (
    <>
      <h2 className={css.works_item_title}>{heading}</h2>
      <iframe
        src={url}
        className={fiveK?`${css.responsiveIframeFiveK}`:`${css.responsiveIframe}`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
      ></iframe>
    </>
  );
};

export default WorkItem;
