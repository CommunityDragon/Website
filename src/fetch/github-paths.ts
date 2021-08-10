import axios from "axios"

/**
 * fetch all github repo page paths
 */
const fetchGithubPaths = async (project: string): Promise<string[]> => (
  (await axios.get(`https://gitcms.communitydragon.org/projects/${project}/pages`)).data
)

export default fetchGithubPaths


