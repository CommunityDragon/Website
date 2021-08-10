interface Ratio {
  label: string;
  ratio: string;
}

export interface UptimeMonitor {
  monitorId: number;
  createdAt: number;
  statusClass: string;
  name: string;
  url?: any;
  type: string;
  dailyRatios: Ratio[];
  "90dRatio": Ratio;
  "30dRatio": Ratio;
}
