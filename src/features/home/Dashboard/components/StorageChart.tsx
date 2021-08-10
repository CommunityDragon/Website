import dynamic from "next/dynamic"
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

import styles from './style.module.scss'

interface IProps {
  used: number
  free: number,
}

const StorageChart: React.FC<IProps> = ({ used, free }) => {

  return (
    <div
      className={`${styles.tile} ${styles.storage_tile} uk-tile uk-tile-default uk-margin-bottom`}
    >
      <ApexChart
        className={styles.storage_chart}
        options={{
          colors: ['#3B4AFD', '#222'],
          labels: ['used', 'free'],
          title: {
            text: 'Storage Usage',
            offsetX: -30,
            offsetY: 30,
            align: 'center',
            style: {
              fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif',
              fontWeight: 300,
              fontSize: '1.15rem',
            }
          },
          subtitle: {
            text: `${Math.round(100 / (used + free) * used * 100) / 100}%`,
            offsetX: 65,
            offsetY: 30,
            align: 'center',
            style: {
              fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif',
              fontWeight: 'bold',
              fontSize: '1rem',
              color: '#fff',
            }
          },
          chart: {
            sparkline: {
              enabled: true,
            },
            zoom: {
              enabled: false,
            },
            animations: {
              enabled: false,
            }
          },
          plotOptions: {
            pie: {
              expandOnClick: false,
            }
          },
          states: {
            active: {
              filter: {
                type: 'none',
              }
            },
            hover: {
              filter: {
                type: 'none',
              }
            },
          },
          stroke:{
            show: false,
          },
          tooltip: {
            fillSeriesColor: true,
          },
          fill: {
            opacity: 1,
            type: ['pattern', 'solid'],
            colors: ['#3B4AFD', 'rgba(80,80,80,.2)'],
            pattern: {
              width: 7,
              height: 7,
              strokeWidth: 5,
            }
          }
        }}
        series={[Math.round(used / 10000000) / 100, Math.round(free / 10000000) / 100]} 
        width='100%'
        type='donut'
      />
    </div>
  )
}

export default StorageChart