import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import cl from "./forget.module.scss";
import Input from "../Form/Input";

const schema = yup
  .object({
    passphrase: yup.string().trim().required("поле обов'язкове"),
    answer: yup.string().trim().required("поле обов'язкове"),
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
        label="Кодова фраза для перевірки"
        name="passphrase"
        placeholder="..."
        register={register}
        errors={errors}
      />
      <Input
        label="Відповідь, яку знаєте тільки Ви"
        name="answer"
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
