/**
 * source: https://github.com/Semantic-Org/Semantic-UI-React/blob/master/src/lib/getElementType.js
 * 
 * returns a createElement() type based on the props of the Component.
 * useful for calculating what type a component should render as.
 *
 * @param Component - a function or ReactClass.
 * @param props - a ReactElement props object
 * @param getDefault - default element type
 * @returns a ReactElement type
 */
export const getElementType = (Component: any, props: any, getDefault?: string | Function): string | Function => {
  const { defaultProps = {} } = Component
  if (props.as && props.as !== defaultProps.as) return props.as
  if (getDefault) return getDefault
  if (props.href) return 'a'
  return defaultProps.as || 'div'
}
