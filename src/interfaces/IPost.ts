export interface IPost {
  title: string;
  body: string;
  updatedAt: Date;
}

interface IApiPost {
  history: IPost[];
  _id: string,
}

export default IApiPost;
