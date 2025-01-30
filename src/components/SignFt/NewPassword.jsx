import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import cl from "./forget.module.scss";
import Input from "../Form/Input";

const schema = yup
  .object({
    newPwd: yup
      .string()
      .min(10, "мінімум 10 символів")
      .trim()
      .required("поле обов'язкове"),
    repeed: yup
      .string()
      .min(10, "мінімум 10 символів")
      .trim()
      .required("поле обов'язкове")
      .oneOf([yup.ref("newPwd")], "Паролі не співпадають"),
  })
  .required();

export default function NewPassword() {
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
      })}
      className={cl.formFt}
    >
      <Input
        label="Новий пароль, 10 символів"
        name="newPwd"
        placeholder="..."
        register={register}
        errors={errors}
      />
      <Input
        label="Повторити пароль"
        name="repeed"
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
