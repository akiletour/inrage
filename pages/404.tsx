import Layout from '@component/layouts/Layout';
import NoScrollLink from '@component/NoScrollLink';

export default function Custom404() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-white text-9xl font-black">404</h1>
        <p className="text-xl">LA PAGE QUE VOUS RECHERCHEZ EST INTROUVABLE.</p>

        <NoScrollLink href="/">
          <span className="button mt-4">Retour à l&apos;accueil</span>
        </NoScrollLink>
      </div>
    </Layout>
  );
}
