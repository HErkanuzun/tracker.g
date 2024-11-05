import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface AgentStatsProps {
  agentName: string;
  winRate: number;
  pickRate: number;
  kda: number;
  abilityUsage: {
    ability1: number;
    ability2: number;
    signature: number;
    ultimate: number;
  };
  matchHistory: {
    date: string;
    performance: number;
  }[];
}

const AgentStats: React.FC<AgentStatsProps> = ({
  agentName,
  winRate,
  pickRate,
  kda,
  abilityUsage,
  matchHistory
}) => {
  const performanceData = {
    labels: matchHistory.map(match => match.date),
    datasets: [
      {
        label: 'Performance',
        data: matchHistory.map(match => match.performance),
        borderColor: '#ff4655',
        tension: 0.4,
      }
    ]
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-red-500">{agentName}</h3>
        <div className="flex space-x-4">
          <div className="text-center">
            <p className="text-sm text-gray-400">Win Rate</p>
            <p className="text-xl font-bold text-white">{winRate}%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400">Pick Rate</p>
            <p className="text-xl font-bold text-white">{pickRate}%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400">KDA</p>
            <p className="text-xl font-bold text-white">{kda}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-700 p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Ability Usage</h4>
          <div className="space-y-3">
            {Object.entries(abilityUsage).map(([ability, usage]) => (
              <div key={ability}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">{ability}</span>
                  <span className="text-white">{usage}%</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-2">
                  <div
                    className="bg-red-500 rounded-full h-2"
                    style={{ width: `${usage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-700 p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Performance Trend</h4>
          <Line data={performanceData} options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                }
              },
              x: {
                grid: {
                  display: false
                }
              }
            }
          }} />
        </div>
      </div>
    </div>
  );
};

export default AgentStats;