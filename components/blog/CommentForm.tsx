import { useReducer } from 'react';

import { useForm } from 'react-hook-form';

import Button from '@component/Button';
import { inputClassname } from '@component/ContactForm';

type FormData = {
  name: string;
  email: string;
  content: string;
};

type StateType = {
  error: string;
  success: boolean;
  loading: boolean;
};

type Action =
  | { type: 'error'; error: string }
  | { type: 'submit' }
  | { type: 'success' };

const initialState = { error: '', success: false, loading: false };

function reducer(state: StateType, action: Action) {
  switch (action.type) {
    case 'submit':
      return {
        ...state,
        loading: true,
        error: '',
        success: false,
      };
    case 'error':
      return {
        ...state,
        loading: false,
        error: action.error,
        success: false,
      };
    case 'success':
      return {
        ...state,
        loading: false,
        error: '',
        success: true,
      };
    default:
      return state;
  }
}

export default function CommentForm({
  postId,
  parent,
}: {
  postId: number;
  parent?: number;
}) {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    dispatch({ type: 'submit' });
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
        dispatch({ type: 'success' });
        reset();
      })
      .catch((err: any) => {
        dispatch({ type: 'error', error: err.message });
      });
  };
  return (
    <div className="mt-8">
      {parent && (
        <p className="text-white font-medium mb-2">Répondre au commentaire</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        {formState.error && <p>{formState.error}</p>}
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

        <div className="mt-2 flex items-center">
          <Button
            isLoading={formState.loading}
            submit
            className="button py-3 px-4 w-full md:w-auto"
          >
            Envoyer mon message
          </Button>

          {formState.success && (
            <p className="text-[#27ae60] font-medium ml-4">
              Merci pour votre commentaire.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
