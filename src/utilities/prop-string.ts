/**
 * turns the string into kebab case
 * 
 * @param str - the string
 * @returns kebab-cased string
 */
const kebabize = (str: string) => (
  str.split('').map((char: string, i: number) => (
    char.toUpperCase() === char ? `${i !== 0 ? '-' : ''}${char.toLowerCase()}` : char
  )).join('')
)

/**
 * returns a string containing props
 * 
 * @param props - prop set
 * @returns a string of props
 */
export const propString = (props: { [key: string]: string | number | boolean }) => (
  Object.keys(props).reduce((acc, cur) =>
    acc + `${kebabize(cur)}:${typeof props[cur] === 'string' ? props[cur] : JSON.stringify(props[cur])};`, '')
)