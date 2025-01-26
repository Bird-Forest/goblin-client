import React from "react";
import cl from "./form.module.scss";

export default function Input({ label, register, name, errors, placeholder }) {
  return (
    <label className={cl.wrapInput}>
      <p className={cl.label}>
        {label}
        <span>*</span>
      </p>
      <input
        placeholder={placeholder}
        {...register(name)}
        className={cl.field}
      />
      <p className={cl.error}>{errors?.[name]?.message}</p>
    </label>
  );
}
