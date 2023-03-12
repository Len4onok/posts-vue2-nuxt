import type { ActionContext, ActionTree } from 'vuex'
import axios from 'axios'
import { MutationsPosts, TMutationsPosts } from './mutations'
import { IPostsState } from '@/store/posts/state'
import { IPost } from '~/store/posts/types'
import { mockPost } from '~/mock/posts'

enum ActionPosts {
  fetchPosts = 'fetchPosts',
  addPost = 'addPost',
  deletePost = 'deletePost',
}

type ActionAugments = Omit<ActionContext<IPostsState, IPostsState>, 'commit'> & {
  commit<K extends keyof TMutationsPosts>(
    key: K,
    payload: Parameters<TMutationsPosts[K]>[1]
  ): ReturnType<TMutationsPosts[K]>
}

export type TActionPosts = {
  [ActionPosts.fetchPosts](context: ActionAugments): void
  [ActionPosts.addPost](context: ActionAugments, payload: IPost): void
  [ActionPosts.deletePost](context: ActionAugments, payload: IPost): void
}

const actions: ActionTree<IPostsState, IPostsState> & TActionPosts = {
  async [ActionPosts.fetchPosts] ({ commit }) {
    // request imitation
    // const posts = (
    // await axios.get<IPost[]>('https://example.com/api/posts')
    // ).data
    await new Promise(resolve => setTimeout(resolve, 1000))
    const posts = mockPost
    commit(MutationsPosts.SET_POSTS, posts)
  },
  async [ActionPosts.addPost] ({ commit }, payload) {
    // request imitation
    // const response = await axios.post('https://example.com/api/posts', payload)
    await new Promise(resolve => setTimeout(resolve, 1000))
    // if (response.status === 200) {
    commit(MutationsPosts.ADD_POST, payload)
    // }
  },
  async [ActionPosts.deletePost] ({ commit }, payload) {
    // request imitation
    // const response = await axios.delete(`https://example.com/api/posts/${payload.id}`)
    await new Promise(resolve => setTimeout(resolve, 1000))
    // if (response.status === 200) {
    commit(MutationsPosts.DELETE_POST, payload)
    // }
  }
}

export default actions
