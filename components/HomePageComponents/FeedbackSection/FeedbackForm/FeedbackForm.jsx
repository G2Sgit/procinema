"use client";
import css from "./FeedbackForm.module.scss";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { postFeedback } from "../../../../services/postFeedback";
// import ModalFormSubmit from "@/components/ContactPageComponents/ModalFormSubmit/ModalFormSubmit";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const NewFeedbackForm = ({ isInModal }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Your name is too short")
      .required("Please enter your name"),
    email: Yup.string()
      .email("This is an ERROR email")
      .required("Please enter your email"),
    bussinesType: Yup.string()
      .min(2, "Please enter your bussines type or website adress")
      .required("Please enter your bussines type or website adress"),
    text: Yup.string()
      .required("Please enter your message")
      .min(20, "Message is too short - should be 20 chars minimum."),
  });
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  // const [isSuccess, setIsSuccess] = useState(false);
  // const [isError, setIsError] = useState(false);

  // const closeSuccessMessage = () => {
  //   setIsSuccess(false);
  // };
  // const closeErrorMessage = () => {
  //   setIsError(false);
  // };

  return (
    <form
      className={`${css.form} ${isInModal && css.modal}`}
      onSubmit={handleSubmit(async (data) => {
        console.log(data);
        const url = new URL(pathname ? pathname : "", "http://localhost:3000");

        url.searchParams.set("modal", "true");

        try {
          await postFeedback(data);
          reset();
          url.searchParams.set("status", "ok");
          console.log(url.toString());
          router.replace(url.toString());
        } catch (error) {
          console.log(error);
          url.searchParams.set("status", "false");

          // router.push("/new-feedback/false");
          router.replace(url.toString());
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
        {errors.email && <p className={css.error}>{errors.email.message}</p>}
      </div>

      <div className={css["input-thumb"]}>
        <input
          className={css.input}
          type="text"
          name="bussinesType"
          placeholder="Bussines type"
          {...register("bussinesType")}
        />
        {errors.bussinesType && (
          <p className={css.error}>{errors.bussinesType.message}</p>
        )}
      </div>

      <div className={css["textarea-thumb"]}>
        <textarea
          className={css["text-area"]}
          placeholder="Your Message"
          {...register("text")}
        />
        {errors.text && <p className={css.error}>{errors.text.message}</p>}
      </div>
      <div className={css.buttonWrapper}>
        <button className={css.button} type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default NewFeedbackForm;
