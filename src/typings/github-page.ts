export interface GithubPage {
  meta: {
    [key: string]: string,
  },
  project: string,
  sidebar: any,
  body: string,
}