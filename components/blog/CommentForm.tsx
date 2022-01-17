import { useForm } from 'react-hook-form';

import { inputClassname } from '@component/ContactForm';
import Button from '@component/Button';

type FormData = {
  name: string;
  email: string;
  content: string;
};

export default function CommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log('submitting form', data);
  };
  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <input
            className={`${inputClassname} ${
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
            className={`${inputClassname} ${
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
            className={`${inputClassname} min-h-[200px] h-full ${
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

        <div className="mt-2">
          <Button submit className="button py-3 px-4 w-full md:w-auto">
            Envoyer mon message
          </Button>
        </div>
      </form>
    </div>
  );
}
