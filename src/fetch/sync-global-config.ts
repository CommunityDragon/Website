import { SettingsResponse } from "@tryghost/content-api"
import request from 'sync-request'

/**
 * fetch global config synchronously
 */
const syncFetchGlobalConfig = (): SettingsResponse | null => {
  const base = process.env.GHOST_URL!
  const key = process.env.GHOST_CONTENT_KEY!
  const url = `${base}${base.endsWith('/') ? '' : '/'}ghost/api/v3/content/settings/?key=${key}`
  try {
    return JSON.parse(request('GET', url).getBody().toString()).settings
  } catch {
    return null;
  }
}

export default syncFetchGlobalConfig
