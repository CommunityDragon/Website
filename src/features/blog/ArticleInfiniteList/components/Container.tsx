import axios from "axios"
import { useState } from "react"
import Spinner from "@components/uikit/Spinner"
import { PostOrPage } from "@tryghost/content-api"
import ArticleList from "@features/blog/ArticleList"
import InfiniteScroll from "react-infinite-scroll-component"

interface IProps {
  initialPosts?: PostOrPage[]
}

/**
 * article list container
 */
const Container: React.FC<IProps> = ({ initialPosts = [] }) => {
  /**
   * current page index
   */
  const [current, setCurrent] = useState(initialPosts.length ? 2 : 1)

  /**
   * has more posts available
   */
  const [hasMore, setHasMore] = useState(true)

  /**
   * all loaded posts
   */
  const [posts, setPosts] = useState([...initialPosts])

  const fetchPosts = async () => {
    const { data } = await axios.get(`/api/blog/posts/by-page/${current}`)
    
    if (!data.length) {
      return setHasMore(false)
    }

    setPosts([...posts, ...data])
    setCurrent(current + 1)
  }

  return (
    <InfiniteScroll
      dataLength={posts.length}
      hasMore={hasMore}
      next={fetchPosts}
      loader={
        <div className='uk-text-center uk-height-small'>
          <div className='uk-padding uk-padding-remove-bottom'>
            <Spinner ratio={2.5} color="secondary" />
          </div>
        </div>
      }
    >
      <ArticleList posts={posts} />
    </InfiniteScroll>
  )
}

export default Container