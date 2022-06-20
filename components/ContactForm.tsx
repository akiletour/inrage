import React from 'react';

import { useForm } from 'react-hook-form';

import { useFormState } from '@hook/useFormState';

import Button from './Button';

type FormData = {
  name: string;
  email: string;
  content: string;
  phone: string;
};

export default function ContactForm({ lg = false }: { lg?: boolean }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const { state, submit, success } = useFormState();
  const onSubmit = (data: FormData) => {
    submit();

    fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((r) => r.json())
      .then(() => {
        success();
        reset();
        fetch('/api/hello-slack', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      });
  };

  return (
    <form className={!lg ? 'my-4' : ''} onSubmit={handleSubmit(onSubmit)}>
      <div className={`grid gap-3 ${!lg && 'md:grid-cols-2'}`}>
        <div className="relative order-1">
          <input
            className={`input-field ${
              errors.name ? 'border-red' : 'border-gray'
            }`}
            placeholder="Prénom NOM"
            type="text"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <span className="absolute text-red top-4 right-2 text-xs">
              Champ requis
            </span>
          )}
        </div>

        <div className="relative order-3">
          <input
            className={`input-field ${
              errors.email ? 'border-red' : 'border-gray'
            }`}
            placeholder="Votre adresse e-mail"
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="absolute text-red top-4 right-2 text-xs">
              Champ requis
            </span>
          )}
        </div>

        <div className="relative order-4">
          <input
            className={`input-field ${
              errors.phone ? 'border-red' : 'border-gray'
            }`}
            placeholder="Numéro de téléphone"
            type="tel"
            {...register('phone', { required: true })}
          />
          {errors.phone && (
            <span className="absolute text-red top-4 right-2 text-xs">
              Champ requis
            </span>
          )}
        </div>
        <div
          className={`md:row-span-3 order-10 ${!lg && 'md:order-2'} relative`}
        >
          <textarea
            className={`input-field min-h-[200px] h-full ${
              errors.content ? 'border-red' : 'border-gray'
            }`}
            placeholder="Laissez-moi un petit message"
            {...register('content', { required: true })}
          />
          {errors.content && (
            <span className="absolute text-red bottom-full mb-1 right-0 text-xs">
              Champ requis
            </span>
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-col md:flex-row items-center justify-center md:justify-end">
        {state.success && (
          <div className="md:mr-4 flex-1 text-center mb-2 md:mb-0 md:text-right text-[#27ae60]">
            <span className="font-bold underline">Merci !</span> Je vous
            répondrai très prochainement dès que j’aurai pris connaissance de
            votre message.
          </div>
        )}
        <Button
          submit
          isLoading={state.loading}
          className="button py-3 px-4 w-full md:w-auto"
        >
          Envoyer mon message
        </Button>
      </div>
    </form>
  );
}
