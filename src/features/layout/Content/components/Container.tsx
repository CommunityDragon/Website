import { useRouter } from "next/router"
import { CSSProperties, ReactNode } from "react"

import styles from './style.module.scss'

interface IProps {
  children?: ReactNode
  style?: CSSProperties
  className?: string
}

/**
 * content container
 */
const Container: React.FC<IProps> = ({ children, style, className }) => {
  const router = useRouter()
  
  const handleClick = (e: any) => {
    const targetLink = e.target.closest('a')
    if (!targetLink) return
    
    e.preventDefault()
    router.push(targetLink.href)
  };
  
  return (
    <div
      className={`${styles.content} ${className ?? ''}`}
      onClick={handleClick}
      style={style}
      {...(typeof children === 'string' ? {
        dangerouslySetInnerHTML: { __html: children }
      } : { children })}
    />
  )
}

export default Container
