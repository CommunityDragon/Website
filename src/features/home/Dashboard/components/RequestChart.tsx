import AreaChart from "./AreaChart"

import styles from './style.module.scss'

interface IProps {
  total: number,
  data: number[],
}

const RequestChart: React.FC<IProps> = ({ total, data }) => (
  <AreaChart
    className={styles.request_chart}
    title='Total Requests'
    subtitleOffset={120}
    subtitle={`${Math.round(total / 10000) / 100}M`}
    data={data.map(x => Math.round(x / 10000) / 100)}
  />
)

export default RequestChart