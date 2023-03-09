'use client';

import { useForm } from 'react-hook-form';

import Button from '@component/Button';
import { useFormState } from '@hook/useFormState';

type FormData = {
  name: string;
  email: string;
  content: string;
};

export default function CommentForm({
  postId,
  parent,
  parentAuthor,
}: {
  postId: string;
  parent?: number;
  parentAuthor?: string;
}) {
  const { state, submit, success, error } = useFormState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    submit();
    fetch('/api/post-comment', {
      method: 'POST',
      body: JSON.stringify({ ...data, postId, parent }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((r) => {
        if (r.status !== 200) {
          throw new Error(
            'Désolé, une erreur est survenue lors de la soumission du formulaire'
          );
        }

        return r.json();
      })
      .then(() => {
        success();
        reset();
      })
      .catch((err: any) => {
        error(err.message);
      });
  };
  return (
    <div className="mt-8">
      {parent && (
        <p className="text-white font-medium mb-2">
          Répondre au commentaire de{' '}
          <span className="underline">{parentAuthor}</span> :
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        {state.error && <p>{state.error}</p>}
        <div className="relative">
          <input
            className={`input-field ${
              errors.name ? 'border-red' : 'border-gray'
            }`}
            placeholder="Votre nom"
            type="text"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <span className="absolute text-red top-4 right-2 text-xs">
              Champ requis
            </span>
          )}
        </div>

        <div className="relative mt-3">
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

        <div className="relative mt-3">
          <textarea
            className={`input-field min-h-[200px] h-full ${
              errors.content ? 'border-red' : 'border-gray'
            }`}
            {...register('content', { required: true })}
          />
          {errors.content && (
            <span className="absolute text-red top-2 mb-1 right-2 text-xs">
              Champ requis
            </span>
          )}
        </div>

        <div className="mt-2 flex items-center">
          <Button
            isLoading={state.loading}
            submit
            className="button py-3 px-4 w-full md:w-auto"
          >
            Envoyer mon message
          </Button>

          {state.success && (
            <p className="text-[#27ae60] font-medium ml-4">
              Merci pour votre commentaire.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
