export interface IPost {
  title: string;
  body: string;
  updatedAt: Date;
}

interface IApiPost {
  history: IPost[];
}

export default IApiPost;
