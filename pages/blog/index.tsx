import ArticleInfiniteList from "@features/blog/ArticleInfiniteList";
import fetchPostsByPage from "@fetch/posts-by-page";
import { PostOrPage } from "@tryghost/content-api";
import { GetStaticProps } from "next";

interface IProps {
  initialPosts: PostOrPage[]
}

/**
 * article listing page
 */
const ArticleListing: React.FC<IProps> = ({ initialPosts }) => (
  <ArticleInfiniteList initialPosts={initialPosts} />
)

/**
 * fetch all posts
 */
export const getStaticProps: GetStaticProps = async () => {
  const posts: PostOrPage[] = []

  await Promise.allSettled([
    fetchPostsByPage(1).then(x => posts.push(...x))
  ])
  
  return {
    props: { initialPosts: posts, revalidate: 60 * 5 }
  }
}

export default ArticleListing