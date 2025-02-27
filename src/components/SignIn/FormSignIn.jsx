import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import cl from "./signin.module.scss";
import Input from "../Form/Input";
import { Link, redirect } from "react-router";

const schema = yup
  .object({
    user: yup
      .string()
      .min(3, "мінімум три символи")
      .trim()
      .required("поле обов'язкове"),
    pwd: yup
      .string()
      .min(10, "мінімум 10 символів")
      .trim()
      .required("поле обов'язкове"),
  })
  .required();

export default function FormSignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
        return redirect("/master");
      })}
      className={cl.formIn}
    >
      <Input
        label="Ім’я або назва компанії"
        name="user"
        placeholder="..."
        register={register}
        errors={errors}
      />
      <Input
        label="Пароль 10 символів"
        name="pwd"
        placeholder="..."
        register={register}
        errors={errors}
      />

      <div className={cl.btnWrap}>
        <button type="submit" className={cl.btn}>
          {isSubmitting ? "Чекаємо" : "Відправити"}
        </button>
      </div>
    </form>
  );
}
