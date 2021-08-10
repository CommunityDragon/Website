import { CloudFlareAnalytics } from "@typings/cloudflare-analytics"
import { UptimeMonitor } from "@typings/uptime-monitor"
import UkContainer from "@components/uikit/Container"
import { useEffect, useState } from "react"
import RequestChart from "./RequestChart"
import StorageChart from "./StorageChart"
import ServedChart from "./ServedChart"
import UptimeChart from "./UptimeChart"
import memoize from "memoizee"
import axios from "axios"

interface IProps {
  initialMonitors?: UptimeMonitor[]
  analytics?: CloudFlareAnalytics
  storageUsed?: number[]
}

/**
 * formats the uptime data from the monitor
 */
const formatUptime = (monitor: UptimeMonitor): number[] => {
  const data = Array(30).fill(0)
  const days = monitor.dailyRatios.length <= 30 ? monitor.dailyRatios.length : 30
  for (let i = 0; i < days; i++) data[i] = +monitor.dailyRatios[i].ratio
  return data.reverse()
}

/**
 * dashboard container
 */
const Container: React.FC<IProps> = ({ initialMonitors = [], analytics, storageUsed = [0,0] }) => {
  /**
   * page is loaded
   */
  const [loaded, setLoaded] = useState(false)

  /**
   * uptime monitors
   */
  const [monitors, setMonitors] = useState<UptimeMonitor[]>([...initialMonitors])

  /**
   * fetch monitors client-side in order to prevent stale data
   */
  useEffect(() => {
    setTimeout(() => setLoaded(true))
    const get = memoize(axios.get, { async: true, maxAge: 1000 * 60 })
    get('/api/uptime').then(({ data }) => setMonitors(data))
  }, [])

  return !loaded ? null : (
    <UkContainer>
      {loaded && (
        <>
          <div className='uk-grid uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m' uk-grid>
            {monitors.map(monitor => (
              <div key={monitor.monitorId}>
                <UptimeChart
                  online={monitor.statusClass === 'success'}
                  data={formatUptime(monitor)}
                  name={monitor.name}
                />
              </div>
            ))}
          </div>

          {(analytics || storageUsed) && (
            <div className='uk-grid uk-grid-small uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-4@m uk-margin-remove-top' uk-grid>
              <div className='uk-width-2-3@s uk-width-3-4@m'>
              {analytics && (
                <>
                  <RequestChart {...analytics.requests} />
                  <ServedChart {...analytics.bytes} />
                </>
              )}
              </div>
              <div>
                {storageUsed && (
                  <StorageChart used={storageUsed[0]} free={storageUsed[1]} />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </UkContainer>
  )
}

export default Container