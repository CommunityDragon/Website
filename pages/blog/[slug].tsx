import { useEnableFeaturesPosts } from "@hooks/featured-posts";
import { GetStaticPaths, GetStaticProps } from "next";
import UkContainer from "@components/uikit/Container";
import PageTitle from "@components/common/PageTitle";
import { PostOrPage } from "@tryghost/content-api";
import fetchPostBySlug from "@fetch/post-by-slug";
import Content from "@features/layout/Content";
import { ghost } from "@utilities/ghost";

interface IProps {
  post: PostOrPage
}

/**
 * article listing page
 */
const ArticlePage: React.FC<IProps> = ({ post }) => {
  useEnableFeaturesPosts()

  return (
    <div style={{ padding: '0 1rem' }}>
      <UkContainer
        size={post.feature_image ? 'small' : 'xsmall'}
        className="uk-margin-auto uk-margin-large-top uk-margin-bottom"
      >
        <PageTitle>{post.title}</PageTitle>
        {post.feature_image && <img src={post.feature_image} alt={post.title} />}
      </UkContainer>
      <UkContainer size='xsmall' className='uk-margin-large-bottom'>
        <Content>{post.html}</Content>
      </UkContainer>
    </div>
  )
}

/**
 * fetch all posts
 */
const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const post = await fetchPostBySlug(params!.slug!)
    return { props: { post }, revalidate: 60 * 60 }
  } catch {
    return { notFound: true }
  }
}

/**
 * all post paths
 */
const getStaticPaths: GetStaticPaths = async () => {
  const data = await ghost.content.posts.browse({ fields: 'slug' })
  const paths = data.map(x => ({ params: { slug: x.slug }}))

  return {
    fallback: 'blocking',
    paths,
  }
}

export default ArticlePage
export { getStaticProps, getStaticPaths }
