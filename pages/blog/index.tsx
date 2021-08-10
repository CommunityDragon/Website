import { GetStaticProps } from "next";
import { ghost } from "@utilities/ghost";
import { PostOrPage } from "@tryghost/content-api";
import ArticleInfiniteList from "@features/blog/ArticleInfiniteList";
import fetchPostsByPage from "@fetch/posts-by-page";

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
    props: { initialPosts: posts }
  }
}

export default ArticleListing