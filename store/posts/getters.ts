import type { GetterTree } from 'vuex'
import { IPostsState } from '@/store/posts/state'
import { IPost } from '~/store/posts/types'

export type TPostsGetters = {
  getPosts(state: IPostsState): IPost[]
}

const getters: GetterTree<IPostsState, IPostsState> & TPostsGetters = {
  getPosts: state => state.posts
}

export default getters
