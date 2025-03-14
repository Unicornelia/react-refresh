import type { CLSMetric, FCPMetric, FIDMetric, LCPMetric, TTFBMetric } from 'web-vitals';

type ReportHandler = (metric: CLSMetric | FCPMetric | FIDMetric | LCPMetric | TTFBMetric) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then((webVitals) => {
      webVitals.onCLS(onPerfEntry);
      webVitals.onFID(onPerfEntry);
      webVitals.onFCP(onPerfEntry);
      webVitals.onLCP(onPerfEntry);
      webVitals.onTTFB(onPerfEntry);
    }).catch((error) => console.error('Error loading web-vitals:', error));
  }
};

export default reportWebVitals;