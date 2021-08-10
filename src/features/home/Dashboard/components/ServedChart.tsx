import AreaChart from "./AreaChart"

import styles from './style.module.scss'

interface IProps {
  total: number,
  data: number[],
}

const ServedChart: React.FC<IProps> = ({ total, data }) => (
  <AreaChart
    className={styles.served_chart}
    title='Data Served'
    subtitleOffset={102.5}
    subtitle={`${Math.round(total / 1000000000)}GB`}
    data={data.map(x => Math.round(x / 10000000) / 100)}
  />
)

export default ServedChart