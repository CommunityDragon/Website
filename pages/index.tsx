import { CloudFlareAnalytics } from "@typings/cloudflare-analytics"
import fetchCloudFlareAnalytics from "@fetch/cloudflare-analytics"
import { enableFeaturedPosts } from "@hooks/featured-posts"
import fetchUptimeMonitors from "@fetch/uptime-monitors"
import { UptimeMonitor } from "@typings/uptime-monitor"
import fetchStorageUsage from "@fetch/storage-usage"
import Dashboard from "@features/home/Dashboard"
import Hero from "@features/home/Hero"
import { GetStaticProps } from "next"

interface IProps {
  initialMonitors: UptimeMonitor[]
  analytics?: CloudFlareAnalytics
  storageUsed: number[]
}

/**
 * Homepage
 */
const Home: React.FC<IProps> = ({ initialMonitors, analytics, storageUsed }) => {
  enableFeaturedPosts()

  return (
    <>
      <Hero requests={analytics?.requests.total ?? 0} bytes={analytics?.bytes.total ?? 0} />
      <div className='uk-padding uk-padding-remove-horizontal' style={{ backgroundColor: 'rgba(0,0,0,.1)' }}>
        <Dashboard analytics={analytics} storageUsed={storageUsed} initialMonitors={initialMonitors} />
      </div>
    </>
  )
}

/**
 * fetch all posts
 */
export const getStaticProps: GetStaticProps = async () => {
  let storageUsed: number[] = [0, 0]
  let initialMonitors: UptimeMonitor[] = []
  let analytics: CloudFlareAnalytics | null = null

  await Promise.allSettled([
    fetchUptimeMonitors().then(x => initialMonitors = x),
    fetchCloudFlareAnalytics().then(x => analytics = x),
    fetchStorageUsage().then(x => storageUsed = x),
  ])

  return {
    props: { initialMonitors, analytics, storageUsed }
  }
}

export default Home