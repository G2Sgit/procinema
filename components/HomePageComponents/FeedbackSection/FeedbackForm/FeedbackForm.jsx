"use client";
import css from "./FeedbackForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter, usePathname } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFeedback } from "@/services/api";

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

  /////// url to replace

  const router = useRouter();
  const pathname = usePathname();
  const PROJECT_URL = "http://localhost:3000";

  const url = new URL(pathname ? pathname : "", PROJECT_URL);
  url.searchParams.set("modal", "true");

  /////// query mutation

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: createFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["feedbacks"],
      });
    },
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const handleSubmitForm = async (values) => {
    try {
      await mutateAsync({
        ...values,
      });
      reset();
      url.searchParams.set("status", "ok");

      router.replace(url.toString());
    } catch (error) {
      console.log(error);
      url.searchParams.set("status", "false");

      router.replace(url.toString());
    }
  };

  return (
    <form
      className={`${css.form} ${isInModal && css.modal}`}
      onSubmit={handleSubmit(async (data) => {
        handleSubmitForm(data);
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
        <button className={css.button} type="submit" disable={isPending}>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default NewFeedbackForm;
