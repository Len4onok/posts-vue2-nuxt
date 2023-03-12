import type { ActionContext, ActionTree } from 'vuex'
import { MutationsLoader, TMutationsLoader } from './mutations'
import { ILoaderState } from '@/store/loader/state'

enum ActionLoader {
  setLoading = 'setLoading',
}

type ActionAugments = Omit<ActionContext<ILoaderState, ILoaderState>, 'commit'> & {
  commit<K extends keyof TMutationsLoader>(
    key: K,
    payload: Parameters<TMutationsLoader[K]>[1]
  ): ReturnType<TMutationsLoader[K]>
}

export type TActionLoader = {
  [ActionLoader.setLoading](context: ActionAugments, payload: boolean): void
}

const actions: ActionTree<ILoaderState, ILoaderState> & TActionLoader = {
  [ActionLoader.setLoading] ({ commit }, payload) {
    commit(MutationsLoader.SET_IS_LOADING, payload)
  }
}

export default actions
