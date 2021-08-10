import { PostOrPage } from "@tryghost/content-api"
import ClampLines from "react-clamp-lines"
import LazyLoad from 'react-lazyload'
import Link from "next/link"


import styles from "./style.module.scss"

interface IProps {
  post: PostOrPage
}



const ArticleSummary: React.FC<IProps> = ({ post }) => (
  <Link href={`/blog/${post.slug}`}>
    <a className={`uk-text-decoration-none ${styles.article_summary}`}>
      <LazyLoad height={200}>
        {post.feature_image ? (
            <img src={post.feature_image} className='uk-margin-small-bottom'/>
        ) : (
          <div className={`${styles.no_image} uk-margin-small-bottom`}>
            <span>{post.title}</span>
          </div>
        )}
      </LazyLoad>
      <div>
        <div className='uk-text-meta uk-text-uppercase'>{post.primary_tag?.name ?? "Blog Post"}</div>
        <div className={`uk-margin-small-top uk-text-lead ${styles.article_title}`}>{post.title}</div>
        <ClampLines text={post.excerpt!} id={post.id} innerElement='p' className='uk-margin-small-top' />
      </div>
    </a>
  </Link>
)

export default ArticleSummary