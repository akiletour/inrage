export interface CommentItemType {
  id: string;
  databaseId: number;
  parentDatabaseId?: number;
  content: string;
  dateGmt: Date;
  author: {
    node: {
      name: string;
    };
  };
  replies: {
    nodes: Array<CommentItemType>;
  };
}
