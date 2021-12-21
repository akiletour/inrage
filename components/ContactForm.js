import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();
  const onSubmit = (data) => fetch('/api/hello', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((r) => r.json()).then((res) => {
    console.log(res);
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register('email', { required: true })} />
      {errors.email && <span>This field is required</span>}

      <input placeholder="Votre prénom" type="text" {...register('firstname', { required: true })} />
      {errors.firstname && <span>This field is required</span>}

      <input placeholder="votre nom" type="text" {...register('lastname', { required: true })} />
      {errors.lastname && <span>This field is required</span>}

      <textarea placeholder="votre message" {...register('content', { required: true })} />
      {errors.content && <span>This field is required</span>}

      <button className="button" type="submit">Envoyer</button>
    </form>
  );
}
