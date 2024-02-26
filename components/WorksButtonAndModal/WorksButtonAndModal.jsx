"use client";

import { CiPlay1 } from "react-icons/ci";
import css from "./WorksButtonAndModal.module.scss";

const WorksButtonAndModal = () => {
  return (
    <>
      <button type="button" className={css.button}>
        <CiPlay1 size={40} />
      </button>
    </>
  );
};

export default WorksButtonAndModal;
