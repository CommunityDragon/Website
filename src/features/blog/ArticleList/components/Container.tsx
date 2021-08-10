import UkContainer from "@components/uikit/Container"
import { PostOrPage } from "@tryghost/content-api"
import ArticleSummary from "./ArticleSummary"

interface IProps {
  className?: string
  posts?: PostOrPage[]
}

/**
 * article list container
 */
const Container: React.FC<IProps> = ({ className, posts = [] }) => (
  <UkContainer className={`${className ?? ''} uk-padding`}>
    <div uk-grid="" className="uk-grid uk-grid-small uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m">
      {posts.map(post => (
        <div key={post.id}>
          <ArticleSummary post={post} />
        </div>
      ))}
    </div>
  </UkContainer>
)

export default Container