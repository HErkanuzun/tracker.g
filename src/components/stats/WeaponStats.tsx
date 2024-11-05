import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface WeaponStatsProps {
  weaponName: string;
  accuracy: number;
  headshots: number;
  damagePerRound: number;
  killsPerMatch: number;
  rangeData: {
    short: number;
    medium: number;
    long: number;
  };
}

const WeaponStats: React.FC<WeaponStatsProps> = ({
  weaponName,
  accuracy,
  headshots,
  damagePerRound,
  killsPerMatch,
  rangeData
}) => {
  const rangeChartData = {
    labels: ['Short Range', 'Medium Range', 'Long Range'],
    datasets: [
      {
        label: 'Accuracy by Range',
        data: [rangeData.short, rangeData.medium, rangeData.long],
        backgroundColor: '#ff4655',
      }
    ]
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-red-500">{weaponName}</h3>
        <div className="flex space-x-4">
          <div className="text-center">
            <p className="text-sm text-gray-400">Accuracy</p>
            <p className="text-xl font-bold text-white">{accuracy}%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400">Headshots</p>
            <p className="text-xl font-bold text-white">{headshots}%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400">Damage/Round</p>
            <p className="text-xl font-bold text-white">{damagePerRound}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-700 p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Performance Metrics</h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Kills per Match</span>
                <span className="text-white">{killsPerMatch}</span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div
                  className="bg-red-500 rounded-full h-2"
                  style={{ width: `${(killsPerMatch / 30) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-700 p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Accuracy by Range</h4>
          <Bar data={rangeChartData} options={{
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

export default WeaponStats;