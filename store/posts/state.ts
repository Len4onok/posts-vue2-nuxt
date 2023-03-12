import { IPost } from '~/store/posts/types'

export interface IPostsState {
  posts: IPost[]
}

export const initState = (): IPostsState => ({
  posts: []
})

export default initState
