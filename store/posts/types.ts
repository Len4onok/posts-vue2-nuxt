export interface ITag {
  id: string,
  name: string,
  post_id: string
}

export interface IPost {
  id: string,
  name: string,
  description: string,
  tags: ITag[]
}
