import { UptimeMonitor } from "@typings/uptime-monitor"
import axios from "axios"

const url = `https://stats.uptimerobot.com/api/getMonitorList/${process.env.UPTIME_KEY}`

/**
 * fetch the uptime monitors
 */
const fetchUptimeMonitors = async (): Promise<UptimeMonitor[]> => (
  (await axios.get(url)).data.psp.monitors
)

export default fetchUptimeMonitors


