type Breadcrumb = {
  link: string;
  title: string;
}

export interface PageHeaderStaticProps {
  props: {
    pageTitle: string;
    breadcrumb: Breadcrumb[]
  }
}
