import { useEnableFeaturesPosts } from "@hooks/featured-posts";
import UkContainer from "@components/uikit/Container";
import PageTitle from "@components/common/PageTitle";
import fetchPreviewByID from "@fetch/preview-by-id";
import { PostOrPage } from "@tryghost/content-api";
import Content from "@features/layout/Content";
import { GetServerSideProps } from "next";

interface IProps {
  post: PostOrPage
}

/**
 * article preview page
 */
const PreviewArticlePage: React.FC<IProps> = ({ post }) => {
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
 * fetch preview post
 */
const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const post = await fetchPreviewByID(params!.id as string)
    return { props: { post }}
  } catch {
    return { notFound: true }
  }
}

export default PreviewArticlePage
export { getServerSideProps }
