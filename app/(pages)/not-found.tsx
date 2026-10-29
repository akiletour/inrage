'use client'

import dynamic from 'next/dynamic'

import NoScrollLink from '@component/NoScrollLink'
import NavPrimary from '@layout/NavPrimary'

const NotFoundScene = dynamic(() => import('@component/NotFoundScene'), {
  ssr: false,
})

export default function Custom404() {
  return (
    <div>
      <NavPrimary isSticky />
      <div className="min-h-[900px] relative overflow-hidden flex justify-center max-[1300px]:justify-end">
        <NotFoundScene />
        <div className="relative pt-[5rem] px-8 text-center max-[1300px]:text-right max-md:text-center">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-wider">
            Hello ?? Il y a quelqu’un ?!?
          </h1>
          <p className="max-w-2xl max-lg:pl-[25rem] max-md:pl-0 mb-4">
            Nous savons que c&apos;est inquiétant, mais la page que vous essayez
            de consulter n&apos;a pas été trouvée. Peut-être s&apos;agissait-il
            simplement d&apos;un mauvais{' '}
            <span className="line-through">lien</span> rêve ?
          </p>

          <NoScrollLink href="/">
            <span className="button px-6">Retour à la page d’accueil</span>
          </NoScrollLink>
        </div>
      </div>
    </div>
  )
}
