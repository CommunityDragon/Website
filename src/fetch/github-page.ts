import { GithubPage } from "@typings/github-page"
import axios from "axios"

/**
 * fetch a page from the github repository
 */
const fetchGitHubPage = async (project: string, path: string): Promise<GithubPage> => (
  (await axios.get(`https://gitcms.communitydragon.org/projects/${project}/page/${path}`)).data
)

export default fetchGitHubPage


