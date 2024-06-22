import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import React from "react";

export function Formulario() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className="flex flex-col max-w-96 m-auto mt-8 border-blue-700">
        <input type="text" {...register("Nombres")} placeholder="Nombres" />
        <input type="text"{...register("Apellido")} placeholder="Apellido" />
        <input type="email"{...register("Correo")} placeholder="Email"/>
        <input type="tel"{...register("Telefono")} placeholder="Telefono" />
        <input type="submit" />
      </form >
    </>
  )
}
