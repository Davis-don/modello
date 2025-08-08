// components/MathComparisonTable.tsx
import React from 'react';
import './mathcomparisontable.css'

type ComparisonItem = {
  metric: string;
  before: string;
  after: string;
  improvement: string;
};

const MathComparisonTable: React.FC = () => {
  const comparisons: ComparisonItem[] = [
    {
      metric: 'Forecast Accuracy',
      before: '62% ± 8%',
      after: '89% ± 3%',
      improvement: '↑ 43.5%'
    },
    {
      metric: 'Processing Time',
      before: '4.2 hours',
      after: '27 minutes',
      improvement: '↓ 89.3%'
    },
    {
      metric: 'Cost Efficiency',
      before: '$12.50/unit',
      after: '$6.80/unit',
      improvement: '↓ 45.6%'
    },
    {
      metric: 'Error Rate',
      before: '18.7%',
      after: '3.2%',
      improvement: '↓ 82.9%'
    }
  ];

  return (
    <section className="mct-container">
      <div className="mct-header">
        <h2 className="mct-main-title">
          Quantitative <span className="mct-highlight">Improvements</span>
        </h2>
        <p className="mct-subtitle">
          Before and after implementing our mathematical models
        </p>
      </div>

      <div className="mct-table-container">
        <table className="mct-table">
          <thead>
            <tr>
              <th className="mct-th mct-metric">Metric</th>
              <th className="mct-th mct-before">Before</th>
              <th className="mct-th mct-after">After</th>
              <th className="mct-th mct-improvement">Improvement</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((item, index) => (
              <tr className="mct-tr" key={index}>
                <td className="mct-td mct-metric">
                  <span className="mct-metric-icon">{index % 2 === 0 ? '∂' : 'Δ'}</span>
                  {item.metric}
                </td>
                <td className="mct-td mct-before">{item.before}</td>
                <td className="mct-td mct-after">{item.after}</td>
                <td className="mct-td mct-improvement">
                  <span className="mct-improvement-value">{item.improvement}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MathComparisonTable;