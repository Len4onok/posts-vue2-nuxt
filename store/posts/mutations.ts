import type { MutationTree } from 'vuex'
import { IPostsState } from '@/store/posts/state'
import { IPost } from '~/store/posts/types'

export enum MutationsPosts {
  SET_POSTS = 'SET_POSTS',
  ADD_POST = 'ADD_POST',
  DELETE_POST = 'DELETE_POST'
}

export type TMutationsPosts = {
  [MutationsPosts.SET_POSTS](state: IPostsState, payload: IPost[]): void
  [MutationsPosts.ADD_POST](state: IPostsState, payload: IPost): void
  [MutationsPosts.DELETE_POST](state: IPostsState, payload: IPost): void
}

const mutations: MutationTree<IPostsState> & TMutationsPosts = {
  [MutationsPosts.SET_POSTS]: (state, payload) => (state.posts = payload),
  [MutationsPosts.ADD_POST]: (state, payload) => (state.posts.push(payload)),
  [MutationsPosts.DELETE_POST]: (state, payload) => (
    state.posts = state.posts.filter(post => post.id !== payload.id)
  )
}

export default mutations
