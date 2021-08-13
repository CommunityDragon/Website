import UkContainer from "@components/uikit/Container"
import Anchor from "@components/common/Anchor"
import UkList from "@components/uikit/List"

import styles from './style.module.scss'
import UkIcon from "@components/uikit/Icon"
import Patreon from "@public/icons/patreon.png"
import { useEffect } from "react"
import { useState } from "react"
import { PostOrPage } from "@tryghost/content-api"
import { useFeaturedPosts } from '@hooks/featured-posts'
import FeaturedArticleList from '@features/blog/FeaturedArticleList'
import axios from "axios"

const Container = () => {
  const [initialized, setInitialized] = useState(false)
  const [posts, setPosts] = useState<PostOrPage[]>([])
  const [featured] = useFeaturedPosts()

  /**
   * set theme
   */
   useEffect(() => {
    if (!initialized) {
      setInitialized(true)
      axios.get<PostOrPage[]>('/api/blog/posts/featured')
        .then(({ data: x }) => setPosts([...x]))
        .catch(() => null)
    }
  }, [featured]);

  return (
    <footer className={`${styles.footer} uk-light`}>
      {featured && <FeaturedArticleList posts={posts} />}
      <UkContainer size='expand' className="uk-padding-small dark-background uk-light">
        <UkContainer size='small'>
          <div className="uk-padding-small uk-visible@s uk-padding-remove-vertical">
            <div className="uk-child-width-1-4 uk-grid" uk-grid="">
                <div>
                  <UkList size='collapse'>
                    <UkList.ListItem>
                      <strong>Community</strong>
                    </UkList.ListItem>
                    <UkList.ListItem className="uk-margin-small-bottom">
                      <Anchor
                        target="_blank"
                        rel="noreferrer noopener"
                        className="uk-text-meta"
                        href="https://discord.gg/rZQwuek"
                      >Discord</Anchor>
                    </UkList.ListItem>
                    <UkList.ListItem>
                      <strong>Donations</strong>
                    </UkList.ListItem>
                    <UkList.ListItem>
                      <Anchor
                        target="_blank"
                        rel="noreferrer noopener"
                        className="uk-text-meta"
                        href="https://www.patreon.com/communitydragon"
                      >Patreon</Anchor>
                    </UkList.ListItem>
                  </UkList>
                </div>
                <div>
                  <UkList size='collapse'>
                    <UkList.ListItem>
                      <strong>Projects</strong>
                    </UkList.ListItem>
                    <UkList.ListItem>
                      <Anchor
                        className="uk-text-meta"
                        href="https://github.com/communitydragon/cdtb"
                      >Toolbox</Anchor>
                    </UkList.ListItem>
                    <UkList.ListItem>
                      <Anchor
                        className="uk-text-meta"
                        href="https://hextechdocs.dev"
                      >Hexdocs</Anchor>
                    </UkList.ListItem>
                    <UkList.ListItem>
                      <Anchor
                        className="uk-text-meta"
                        href="https://github.com/communitydragon/awesome-league"
                      >Awesome</Anchor>
                    </UkList.ListItem>
                  </UkList>
                </div>
                <div>
                <UkList size='collapse'>
                    <UkList.ListItem>
                      <strong>Links</strong>
                    </UkList.ListItem>
                    <UkList.ListItem>
                      <Anchor
                        className="uk-text-meta"
                        href="https://www.communitydragon.org"
                      >Home</Anchor>
                    </UkList.ListItem>
                    <UkList.ListItem>
                      <Anchor
                        className="uk-text-meta"
                        href="https://github.com/communitydragon"
                      >GitHub</Anchor>
                    </UkList.ListItem>
                    <UkList.ListItem>
                      <Anchor
                        className="uk-text-meta"
                        href="https://github.com/communitydragon/docs/blob/master/assets.md"
                      >Docs</Anchor>
                    </UkList.ListItem>
                  </UkList>
                </div>
                <div className="uk-text-right">
                  <ul className={`${styles.bullet_points} uk-margin-small-top`}>
                    <li>
                      <UkIcon
                        button
                        name='github'
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://github.com/communitydragon"
                        aria-label="GitHub"
                      />
                    </li>
                    <li>
                      <UkIcon
                        button
                        name='discord'
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://discord.gg/rZQwuek"
                        aria-label="Discord"
                      />
                    </li>
                    <li>
                      <Anchor
                        target="_blank"
                        aria-label="Patreon"
                        rel="noreferrer noopener"
                        className="uk-icon-button uk-icon"
                        href="https://www.patreon.com/communitydragon"
                      >
                        <img
                          className={styles.hover_img}
                          src={Patreon.src}
                          height="18"
                          width="18"
                          alt="Patreon"
                        />
                      </Anchor>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          <div className="uk-margin-top uk-text-center">
            <hr className="uk-margin-small-bottom uk-visible@s" />
            <span className="uk-text-meta">
              CommunityDragon was created under Riot Games'
              <Anchor target="_blank" rel="noreferrer noopener" href="https://www.riotgames.com/en/legal">
                {' "Legal Jibber Jabber" '}
              </Anchor>
              policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project.
            </span>
          </div>
        </UkContainer>
      </UkContainer>
    </footer>
  )
}

export default Container