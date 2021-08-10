/**
 * returns a string containing class names
 * 
 * @param className - the classname
 * @param classes - class prop set
 * @returns string of classes
 */
export const propClass = (className: string | undefined, classes: { [key: string]: any }): string => (
  Object.keys(classes).reduce((acc, cur) => acc + (classes[cur] ? ` ${cur}` : ''), ` ${className ?? ''}`)
)