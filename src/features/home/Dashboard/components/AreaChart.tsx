import dynamic from "next/dynamic"
import { useState } from "react";
import { useEffect } from "react";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

import styles from './style.module.scss'

const foregroundColor = '#3B4AFD'

interface IProps {
  data: number[]
  title: string
  className?: string,
  subtitle?: string,
  subtitleOffset?: number,
}

const AreaChart: React.FC<IProps> = ({ title, subtitle, subtitleOffset = 0, className, data = [] }) => {
  const [backgroundColor, setBackgroundColor] = useState('#131313')
  const [gridColor, setGridColor] = useState('rgba(255,255,255,.1)')

  /**
   * set colors
   */
   useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setBackgroundColor('#fff')
      setGridColor('rgba(0,0,0,.1)')
    }
  }, []);

  return (
    <div className={`${styles.tile} uk-tile uk-tile-default uk-margin-bottom`} style={{ padding: '0 1rem' }}>
      <ApexChart
        className={`${styles.area_chart} ${className ?? ''}`}
        options={{
          title: {
            text: title,
            offsetX: 10,
            offsetY: 60,
            style: {
              fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif',
              fontWeight: 300,
              fontSize: '1.15rem',
            }
          },
          subtitle: subtitle ? {
            text: subtitle,
            offsetX: 10 + subtitleOffset,
            offsetY: 60,
            style: {
              fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif',
              fontWeight: 'bold',
              fontSize: '1rem',
              color: '#fff',
            }
          } : undefined,
          chart: {
            group: 'social',
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
            animations: {
              enabled: false,
            }
          },
          tooltip: {
            followCursor: true,
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight',
            colors: [foregroundColor],
            width: 2,
          },
          markers: {
            strokeWidth: 1,
            strokeColors: [backgroundColor],
            strokeOpacity: 1,
            colors: [foregroundColor],
            size: 3,
            hover: {
              size: 4
            }
          },
          fill: {
            opacity: .25,
            type: 'solid',
            colors: [foregroundColor],
          },
          grid: {
            position: 'back',
            borderColor: gridColor,
            xaxis: {
              lines: {
                show: true
              }
            },
            yaxis: {
              lines: {
                show: false
              }
            }
          },
          yaxis: {
            min: 0,
            labels: {
              show: false,
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          xaxis: {
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            tooltip: {
              enabled: false,
            }
          }
        }}
        series={[{
          data,
        }]}
        height={150}
        type='area'
      />
    </div>
  )
}

export default AreaChart