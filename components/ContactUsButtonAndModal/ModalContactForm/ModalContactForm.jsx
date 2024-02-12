"use client";

import css from "./ModalContactForm.module.scss";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { postContactMessage } from "../../../services/postContactMessage";
import ModalFormSubmit from "../../ContactPageComponents/ModalFormSubmit/ModalFormSubmit";
import { IoMdClose } from "react-icons/io";;

const ModalContactForm = ({ closeHandler }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Your name is too short")
      .required("Please enter your name"),
    email: Yup.string()
      .email("This is an ERROR email")
      .required("Please enter your email"),
    message: Yup.string()
      .required("Please enter your message")
      .min(20, "Message is too short - should be 20 chars minimum."),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const closeSuccessMessage = () => {
    setIsSuccess(false);
  };
  const closeErrorMessage = () => {
    setIsError(false);
  };

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <div className={css.buttonCloseWrapper} onClick={closeHandler}>
          <button className={css.buttonClose}>
            <IoMdClose value={{ fill: "black" }} size={30} />
          </button>
        </div>

        <form
          className={css.form}
          onSubmit={handleSubmit(async (data) => {
            try {
              await postContactMessage(data);
              reset();
              setIsSuccess(true);
            } catch (error) {
              console.log(error);
              setIsError(true);
            }
          })}
        >
          <div className={css["input-thumb"]}>
            <input
              className={css.input}
              type="text"
              name="name"
              placeholder="Name"
              {...register("name")}
            />
            {errors.name && <p className={css.error}>{errors.name.message}</p>}
          </div>

          <div className={css["input-thumb"]}>
            <input
              className={css.input}
              type="email"
              name="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p className={css.error}>{errors.email.message}</p>
            )}
          </div>

          <div className={css["textarea-thumb"]}>
            <textarea
              className={css["text-area"]}
              placeholder="Your Message"
              {...register("message")}
            />
            {errors.message && (
              <p className={css.error}>{errors.message.message}</p>
            )}
          </div>
          <div className={css.buttonWrapper}>
            <button className={css.button} type="submit">
              Send Message
            </button>
          </div>
          {isSuccess && (
            <ModalFormSubmit
              submit="success"
              text="Success"
              buttonText="OK"
              closeHandler={closeSuccessMessage}
            />
          )}
          {isError && (
            <ModalFormSubmit
              text="Error. Try again later"
              buttonText="OK"
              closeHandler={closeErrorMessage}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default ModalContactForm;
