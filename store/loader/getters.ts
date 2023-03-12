import type { GetterTree } from 'vuex'
import { ILoaderState } from '@/store/loader/state'

export type TLoaderGetters = {
  getIsLoading(state: ILoaderState): boolean
}

const getters: GetterTree<ILoaderState, ILoaderState> & TLoaderGetters = {
  getIsLoading: state => state.isLoading
}

export default getters
