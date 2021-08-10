import axios from "axios"

/**
 * fetch the storage usage of the main server
 */
const fetchStorageUsage = async (): Promise<number[]> => (
  (await axios.get('https://system.node-0001.cdragon.ovh/storage')).data
)

export default fetchStorageUsage


