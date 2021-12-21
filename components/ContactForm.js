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

  const inputClassname = 'border outline-none focus:shadow-orange focus:shadow-center focus:border-orange text-white placeholder:text-gray py-3 w-full text-base pl-3 bg-transparent';

  return (
    <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="relative order-1">
          <input
            className={`${inputClassname} ${errors.name ? 'border-red' : 'border-gray'}`}
            placeholder="Prénom NOM"
            type="text"
            {...register('name', { required: true })}
          />
          {errors.name && <span className="absolute text-red top-4 right-2 text-xs">Champ requis</span>}
        </div>

        <div className="md:row-span-3 order-10 md:order-2 relative">
          <textarea
            className={`${inputClassname} min-h-[200px] h-full ${errors.content ? 'border-red' : 'border-gray'}`}
            placeholder="Laissez-moi un petit message"
            {...register('content', { required: true })}
          />
          {errors.content && <span className="absolute text-red bottom-full mb-1 right-0 text-xs">Champ requis</span>}
        </div>

        <div className="relative order-3">
          <input
            className={`${inputClassname} ${errors.email ? 'border-red' : 'border-gray'}`}
            placeholder="Votre adresse e-mail"
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && <span className="absolute text-red top-4 right-2 text-xs">Champ requis</span>}
        </div>

        <div className="relative order-4">
          <input
            className={`${inputClassname} ${errors.phone ? 'border-red' : 'border-gray'}`}
            placeholder="Numéro de téléphone"
            type="tel"
            {...register('phone', { required: true })}
          />
          {errors.phone && <span className="absolute text-red top-4 right-2 text-xs">Champ requis</span>}
        </div>
      </div>

      <div className="mt-3 flex justify-center md:justify-end">
        <button className="button py-3 px-4 w-full md:w-auto" type="submit">Envoyer mon message</button>
      </div>

    </form>
  );
}
