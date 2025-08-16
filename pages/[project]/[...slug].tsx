import EditArticleBlock from "@features/blog/EditArticleBlock";
import fetchGitHubProjects from "@fetch/github-projects";
import { GetStaticPaths, GetStaticProps } from "next";
import fetchGithubPaths from "@fetch/github-paths";
import { GithubPage } from "@typings/github-page";
import fetchGitHubPage from "@fetch/github-page";
import Content from "@features/layout/Content";
import Anchor from "@components/common/Anchor";
import UkList from "@components/uikit/List";

interface IProps {
  page: GithubPage
}

/**
 * article listing page
 */
const GithubSlugPage: React.FC<IProps> = ({ page }) => {
  const formatSidebar = (items: any[]) => (
    <UkList size='collapse' marker='circle' color='muted' className='uk-margin-remove'>
      {items.map((item, i) => (
        <UkList.ListItem key={i}>
          {Array.isArray(item)
            ? (
              <>
                <Anchor className='uk-text-meta' href={`/${page.project}/${item[0].path}`}>
                  {item[0].title}
                </Anchor>
                {formatSidebar(item.slice(1))}
              </>
            )
            : <Anchor className='uk-text-meta' href={`/${page.project}/${item.path}`}>
                {item.title}
              </Anchor>
          }
        </UkList.ListItem>
      ))}
    </UkList>
  )

  return (
    <div>
      <div style={{ maxWidth: '1100px' }} className='uk-margin-auto uk-margin-large-top uk-flex uk-margin-large-bottom'>
        <div className='uk-flex uk-margin-auto' style={{ width: '100%' }}>
          <div className='uk-visible@s uk-text-small'>
            <div style={{ width: '15rem', marginTop: '1rem', marginRight: '2rem' }}>
              <div uk-sticky="offset: 64px; bottom: #bottom">
                {' '}
                <div className='uk-text-emphasis uk-width-small uk-text-uppercase'>{page.project}</div>
                <div style={{ marginLeft: '-10px' }}>{formatSidebar(page.sidebar)}</div>
              </div>
            </div>
          </div>
          <div style={{ padding: '0 1rem', width: '100%' }}>
            <Content className='uk-padding-small uk-padding-remove-vertical' style={{ display: 'inline-grid' }}>{page.body}</Content>
            {page.meta.source && (
              <>
                <hr />
                <EditArticleBlock source={page.meta.source} />
              </>
            )}
          </div>
        </div>
      </div>
      <div id="bottom" style={{ marginTop: '-4.5rem', marginBottom: '10rem' }}></div>
    </div>
  )
}

/**
 * fetch all posts
 */
const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = Array.isArray(params!.slug!) ? params!.slug!.join('/') : params!.slug!
    const project = params!.project! as string
    const page = await fetchGitHubPage(project, slug)

    return {
      props: { page }, revalidate: 60 * 60 * 24
    }
  } catch {
    return { notFound: true }
  }
}

/**
 * all post paths
 */
const getStaticPaths: GetStaticPaths = async () => {
  const projects = await fetchGitHubProjects()
  const paths: { params: { project: string, slug: string[] }}[] = []

  await Promise.allSettled(projects.map(
    project => fetchGithubPaths(project).then(slugs => (
      slugs.filter(slug => slug).forEach(slug => (
        paths.push({ params: { project, slug: slug.split('/') }}
      ))))
    )
  ))

  return { fallback: 'blocking', paths }
}

export default GithubSlugPage
export { getStaticProps, getStaticPaths }
