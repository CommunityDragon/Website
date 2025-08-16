import Link from "next/link"

import styles from "./style.module.scss"

interface IProps {
  source: string
}

const Container: React.FC<IProps> = ({ source }) => (
  <div className={`${styles.edit_article} uk-tile uk-tile-small`}>
    This page is editable on GitHub. Found any mistakes or want to improve this page?{' '}
    <Link href={source} target="_blank" rel="noreferrer noopener">
      Click here to edit this page.
    </Link>
  </div>
)

export default Container