import css from "./WorkItem.module.scss";

const WorkItem = ({ url, heading }) => {
  return (
    <>
      <h2 className={css.works_item_title}>{heading}</h2>
      <iframe
        src={url}
        className={css.responsiveiframe}
        frameBorder="0"
        allow="autoplay; fullScreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default WorkItem;
