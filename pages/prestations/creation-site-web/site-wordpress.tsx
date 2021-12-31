import { GetStaticProps } from 'next';
import { PageHeaderStaticProps } from '@type/header';

export default function PrestationWordPress() {
  return (
    <div>
      Liste des prestations de WordPress
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (): Promise<PageHeaderStaticProps> => ({
  props: {
    pageTitle: 'Création de site WordPress',
    breadcrumb: [{
      link: '/prestations',
      title: 'Prestations',
    }],
  },
});
