import { enableFeaturedPosts } from "@hooks/featured-posts"
import UkContainer from "@components/uikit/Container"
import Link from "next/link"

/**
 * not found page
 */
const NotFoundPage: React.FC = () => {
  enableFeaturedPosts()
  
  return (
    <UkContainer size='small' className="uk-margin uk-margin-large-bottom">
      <div className='uk-text-center'>
        <h1 style={{ fontSize: "12rem" }}>404</h1>
        <h1>Oops... Seems like this page doesn&apos;t exist.</h1>
        <span style={{ fontSize: '1.5rem' }} className="uk-text-light">
          Click <strong><Link href="/">here</Link></strong> to go back to the homepage.
        </span>
      </div>
    </UkContainer>
  )
}

export default NotFoundPage