import styles from './style.module.scss'

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

const PageTitle: React.FC<Props> = ({ className, ...props }) => (
  <h1 className={`uk-heading-bullet ${styles.title} ${className ?? ''}`} {...props} />
)

export default PageTitle
