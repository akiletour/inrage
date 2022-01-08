export type HeaderType = 'default' | 'tma';
export type pageTitleType = string | string[];
export type pageExcerptType = string | string[];

type Breadcrumb = {
  link: string;
  title: string;
}

export interface PageHeaderStaticProps {
  props: {
    pageTitle: string | string[];
    breadcrumb: Breadcrumb[];
    headerType?: HeaderType;
    excerpt?: pageExcerptType;
  }
}
