import axios from "axios"

/**
 * fetch all github project repos
 */
const fetchGitHubProjects = async (): Promise<string[]> => (
  (await axios.get('https://gitcms.communitydragon.org/projects')).data
)

export default fetchGitHubProjects


