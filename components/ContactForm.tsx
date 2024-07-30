"use client"

import React from "react"
import { useFormState } from "@hook/useFormState"
import { useForm } from "react-hook-form"

import { ButtonForm } from "./ui/button-form"

type FormData = {
  name: string
  email: string
  content: string
  phone: string
}

export default function ContactForm({ lg = false }: { lg?: boolean }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()
  const { state, submit, success } = useFormState()
  const onSubmit = (data: FormData) => {
    submit()

    fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then(() => {
        success()
        reset()
        fetch("/api/hello-slack", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        })
      })
  }

  return (
    <form className={!lg ? "my-4" : ""} onSubmit={handleSubmit(onSubmit)}>
      <div className={`grid gap-3 ${!lg && "md:grid-cols-2"}`}>
        <div className="relative order-1">
          <input
            className={`input-field ${
              errors.name ? "border-red" : "border-gray"
            }`}
            placeholder="Prénom NOM"
            type="text"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="absolute right-2 top-4 text-xs text-red">
              Champ requis
            </span>
          )}
        </div>

        <div className="relative order-3">
          <input
            className={`input-field ${
              errors.email ? "border-red" : "border-gray"
            }`}
            placeholder="Votre adresse e-mail"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="absolute right-2 top-4 text-xs text-red">
              Champ requis
            </span>
          )}
        </div>

        <div className="relative order-4">
          <input
            className={`input-field ${
              errors.phone ? "border-red" : "border-gray"
            }`}
            placeholder="Numéro de téléphone"
            type="tel"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="absolute right-2 top-4 text-xs text-red">
              Champ requis
            </span>
          )}
        </div>
        <div
          className={`order-10 md:row-span-3 ${!lg && "md:order-2"} relative`}
        >
          <textarea
            className={`input-field h-full min-h-[200px] ${
              errors.content ? "border-red" : "border-gray"
            }`}
            placeholder="Laissez-moi un petit message"
            {...register("content", { required: true })}
          />
          {errors.content && (
            <span className="absolute bottom-full right-0 mb-1 text-xs text-red">
              Champ requis
            </span>
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center justify-center md:flex-row md:justify-end">
        {state.success && (
          <div className="mb-2 flex-1 text-center text-[#27ae60] md:mb-0 md:mr-4 md:text-right">
            <span className="font-bold underline">Merci !</span> Je vous
            répondrai très prochainement dès que j’aurai pris connaissance de
            votre message.
          </div>
        )}
        <ButtonForm
          isLoading={state.loading}
          disabled={state.loading}
          size="lg"
        >
          Envoyer mon message
        </ButtonForm>
      </div>
    </form>
  )
}
