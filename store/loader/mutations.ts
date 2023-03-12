import type { MutationTree } from 'vuex'
import { ILoaderState } from '@/store/loader/state'

export enum MutationsLoader {
  SET_IS_LOADING = 'SET_IS_LOADING'
}

export type TMutationsLoader = {
  [MutationsLoader.SET_IS_LOADING](state: ILoaderState, payload: boolean): void
}

const mutations: MutationTree<ILoaderState> & TMutationsLoader = {
  [MutationsLoader.SET_IS_LOADING]: (state, payload) => (state.isLoading = payload)
}

export default mutations
