
import fetchGitHubProjects from "@fetch/github-projects";
import { GetStaticPaths, GetStaticProps } from "next";
import { GithubPage } from "@typings/github-page";
import fetchGitHubPage from "@fetch/github-page";
import GithubSlugPage from "./[...slug]";

interface IProps {
  page: GithubPage
}

/**
 * article listing page
 */
const GithubIndexPage: React.FC<IProps> = props => (
  <GithubSlugPage {...props}/>
)

/**
 * fetch all posts
 */
const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const project = params!.project! as string
    const page = await fetchGitHubPage(project, '')

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
  const paths: { params: { project: string }}[] = []

  await Promise.allSettled(projects.map(
    project => paths.push({ params: { project }})
  ))

  return { fallback: 'blocking', paths }
}

export default GithubIndexPage
export { getStaticProps, getStaticPaths }
