"use client";
import css from "./ContactsForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { postContactMessage } from "../../../services/postContactMessage"

const ContactsForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Your name is too short")
      .required("Please enter your name"),
    email: Yup.string()
      .email("This is an ERROR email")
      .required("Please enter your email"),
    phone: Yup.number()
      .min(10, "Your phone is too short")
      .required("Please enter your phone"),
    website: Yup.string(),
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

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(async (data) => {
        await postContactMessage(data)
        reset();
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
          type="text"
          name="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && <p className={css.error}>{errors.email.message}</p>}
      </div>
{/* 
      <div className={css["input-thumb"]}>
        <input
          className={css.input}
          type="text"
          name="phone"
          placeholder="phone"
          {...register("phone")}
        />
        {errors.phone && <p className={css.error}>{errors.phone.message}</p>}
      </div> */}

      {/* <div className={css["input-thumb"]}>
        <input
          className={css.input}
          type="text"
          name="website"
          placeholder="website"
          {...register("website")}
        />
        {errors.website && (
          <p className={css.error}>{errors.website.message}</p>
        )}
      </div> */}

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
      </button></div>
      
    </form>
  );
};

export default ContactsForm;
