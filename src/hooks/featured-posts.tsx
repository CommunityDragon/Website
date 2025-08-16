import { useContext, useEffect } from 'react';
import { createContext, Dispatch, useReducer } from 'react';

interface IState {
  active: boolean
}

const reducer = (state: IState, action: any) => {
  switch (action.type) {
    case "FEATURED_POSTS_OFF":
      return { ...state, active: false }
    case "FEATURED_POSTS_ON":
      return { ...state, active: true }
    default:
      return state
  }
}

const initialState: IState = {
  active: false
}

const FeaturedPostsContext = createContext({
  state: initialState,
  dispatch: (() => {}) as Dispatch<any>
})


export const FeaturedPostsProvider: React.FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <FeaturedPostsContext.Provider value={{ state, dispatch }}>
    	{ children }
    </FeaturedPostsContext.Provider>
  )
}
/**
 * featured posts hook
 */
export const useFeaturedPosts = (): [boolean, (active: boolean) => void] => {
  const { state, dispatch } = useContext(FeaturedPostsContext)
  return [state.active, (active: boolean) => (
    dispatch({ type: active ? 'FEATURED_POSTS_ON' : 'FEATURED_POSTS_OFF' })
  )]
}

/**
 * enable featured posts hook
 */
export const useEnableFeaturesPosts = () => {
  const [_, setFeatured] = useFeaturedPosts()

  useEffect(() => {
    setFeatured(true)
    return () => setFeatured(false)
  }, [setFeatured])
}
