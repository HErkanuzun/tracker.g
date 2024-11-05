import React, { useState } from 'react';
import AgentStats from '../components/stats/AgentStats';
import WeaponStats from '../components/stats/WeaponStats';

const Stats = () => {
  const [selectedAgent, setSelectedAgent] = useState('Jett');
  const [selectedWeapon, setSelectedWeapon] = useState('Vandal');

  const agents = {
    Jett: {
      winRate: 52,
      pickRate: 15.3,
      kda: 1.45,
      abilityUsage: {
        ability1: 75,
        ability2: 60,
        signature: 90,
        ultimate: 40
      },
      matchHistory: [
        { date: '2024-01-01', performance: 85 },
        { date: '2024-01-02', performance: 92 },
        { date: '2024-01-03', performance: 78 },
        { date: '2024-01-04', performance: 88 },
        { date: '2024-01-05', performance: 95 }
      ]
    }
  };

  const weapons = {
    Vandal: {
      accuracy: 28.5,
      headshots: 32.1,
      damagePerRound: 156,
      killsPerMatch: 18.5,
      rangeData: {
        short: 85,
        medium: 75,
        long: 65
      }
    }
  };

  return (
    <div className="min-h-screen bg-valorant-dark pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Performance Statistics</h1>
          <p className="text-gray-400">Track your performance across agents and weapons</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-valorant-red mb-4">Agent Statistics</h2>
          <div className="grid grid-cols-1 gap-6">
            <AgentStats
              agentName={selectedAgent}
              {...agents[selectedAgent]}
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-valorant-red mb-4">Weapon Statistics</h2>
          <div className="grid grid-cols-1 gap-6">
            <WeaponStats
              weaponName={selectedWeapon}
              {...weapons[selectedWeapon]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;