import { PostOrPage } from "@tryghost/content-api"
import ArticleList from "@features/blog/ArticleList"

interface IProps {
  posts?: PostOrPage[]
}

import styles from './style.module.scss'

/**
 * article list container
 */
const Container: React.FC<IProps> = ({ posts = [] }) => (
  <ArticleList className={styles.featured_article_list} posts={posts} />
)

export default Container