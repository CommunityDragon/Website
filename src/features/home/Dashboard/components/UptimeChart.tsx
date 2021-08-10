import dynamic from "next/dynamic"
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

import styles from './style.module.scss'

interface IProps {
  online: boolean
  data: number[]
  name: string
}

const UptimeChart: React.FC<IProps> = ({ online, name, data = [] }) => {
  const uptime = data.map(x => x > 100 ? 100 : x < 0 ? 0 : x).map(x => x - (x % 5))
  const downtime = uptime.map(x => 100 - x)

  return (
    <div className={`${styles.tile} uk-tile uk-tile-default uk-margin-bottom`} style={{ padding: '1.5rem' }}>
      <div className='monitor-name uk-text-large uk-text-muted uk-margin-small-left uk-margin-small-bottom'>
        <span className='uk-visible@s'>status of </span><strong className='uk-text-emphasis'>{name}</strong>
      </div>
        <ApexChart
          className={styles.uptime_chart}
          options={{
            chart: {
              sparkline: {
                enabled: true,
              },
              stacked: true,
              stackType: "100%",
              animations: {
                enabled: false,
              },
              redrawOnParentResize: true,
              redrawOnWindowResize: true,
            },
            states: {
              active: {
                filter: {
                  type: 'none',
                }
              }
            },
            tooltip: {
              enabledOnSeries: [0],
            },
            fill: {
              opacity: 1,
              colors: ['#555', 'rgba(80,80,80,.2)'],
              pattern: {
                style: 'border-radius: 10px',
              }
            }
          }}
          series={[{
            data: uptime,
          }, {
            data: downtime,
          }]}
          height={100}
          width='100%'
          type='bar'
        />
      <div className='uk-text-normal uk-text-right uk-margin-small-left'>
        service is currently <strong className={`uk-text-${online ? 'success' : 'danger'}`}>
          {online ? 'up' : 'down'}
        </strong>
      </div>
    </div>
  )
}

export default UptimeChart