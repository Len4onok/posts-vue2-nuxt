export interface ILoaderState {
  isLoading: boolean
}

export const initState = (): ILoaderState => ({
  isLoading: false
})

export default initState
