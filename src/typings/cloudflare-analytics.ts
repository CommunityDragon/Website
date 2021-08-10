export interface CloudFlareAnalytics {
  bytes: {
    total: number,
    data: number[],
  },
  requests: {
    total: number,
    data: number[],
  }
}