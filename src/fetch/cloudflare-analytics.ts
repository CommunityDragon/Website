import { CloudFlareAnalytics } from "@typings/cloudflare-analytics"
import axios from "axios"

/**
 * fetch cloudflare analytics
 */
const fetchCloudFlareAnalytics = async (): Promise<CloudFlareAnalytics> => {
  const url = `https://api.cloudflare.com/client/v4/graphql`

  const sinceDate = new Date()
  sinceDate.setDate(new Date().getDate() - 30)
  const since = sinceDate.toISOString().split('T')[0]
  const until = new Date().toISOString().split('T')[0]
  
  const { data } = await axios.post(url, {
    variables: { zoneTag: process.env.CF_ZONE, since, until },
    query: `
      query {
        viewer {
          zones(filter: { zoneTag: $zoneTag }) {
            total: httpRequests1dGroups(
              limit: 1,
              filter: {
                date_geq: $since,
                date_lt:  $until,
              }) {
              data: sum {
                requests,
                bytes,
              }
            },
            daily: httpRequests1dGroups(
              limit: 30,
              orderBy: [date_DESC],
              filter: {
                date_geq: $since,
                date_lt:  $until,
              }) {
              dimensions {
                date
              }
              data: sum {
                requests,
                bytes,
              }
            }
          }
        }
      }
    `
  }, {
    headers: { Authorization: `Bearer ${process.env.CF_TOKEN}` }
  });

  const res = {
    bytes: {
      total: data.data.viewer.zones[0].total[0].data.bytes,
      data: data.data.viewer.zones[0].daily.map((day: any) => day.data.bytes).reverse()
    },
    requests: {
      total: data.data.viewer.zones[0].total[0].data.requests,
      data: data.data.viewer.zones[0].daily.map((day: any) => day.data.requests).reverse()
    }
  }

  return res
}

export default fetchCloudFlareAnalytics