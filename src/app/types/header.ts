export type HeaderType = 'default' | 'tma';
export type PageTitleType = string | string[];
export type PageExcerptType = string | string[];

type Breadcrumb = {
  link: string;
  title: string;
};

export interface PageHeaderStaticProps {
  props: {
    pageTitle: string | string[];
    breadcrumb: Breadcrumb[];
    headerType?: HeaderType;
    excerpt?: PageExcerptType;
  };
}
