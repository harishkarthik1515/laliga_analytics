import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { TeamStats } from '../types/team';

interface TeamComparisonProps {
  team1: TeamStats;
  team2: TeamStats | null;
  teams: TeamStats[];
  onSelectTeam: (id: string) => void;
}

const TeamComparison: React.FC<TeamComparisonProps> = ({ team1, team2, teams, onSelectTeam }) => {
  if (!team2) {
    return (
      <div className="text-center py-8">
        <h3 className="text-lg font-semibold mb-4">Select a team to compare with {team1.name}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {teams.map((team) => (
            <button
              key={team.id}
              onClick={() => onSelectTeam(team.id)}
              className="p-4 border rounded-lg hover:bg-blue-50 transition-colors flex flex-col items-center"
            >
              <img
                src={team.logo}
                alt={team.name}
                className="w-16 h-16 mb-2 rounded-full"
              />
              <p className="text-sm font-medium">{team.name}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const comparisonData = [
    {
      stat: 'Points',
      [team1.name]: team1.points,
      [team2.name]: team2.points,
    },
    {
      stat: 'Wins',
      [team1.name]: team1.wins,
      [team2.name]: team2.wins,
    },
    {
      stat: 'Goals Scored',
      [team1.name]: team1.goalsScored,
      [team2.name]: team2.goalsScored,
    },
    {
      stat: 'Goals Conceded',
      [team1.name]: team1.goalsConceded,
      [team2.name]: team2.goalsConceded,
    },
    {
      stat: 'Matches Played',
      [team1.name]: team1.matchesPlayed,
      [team2.name]: team2.matchesPlayed,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-6">
            <div className="flex flex-col items-center">
              <img src={team1.logo} alt={team1.name} className="w-16 h-16 rounded-full mb-2" />
              <span className="text-sm font-semibold text-gray-900">{team1.name}</span>
            </div>
            <span className="text-2xl font-bold text-blue-600">VS</span>
            <div className="flex flex-col items-center">
              <img src={team2.logo} alt={team2.name} className="w-16 h-16 rounded-full mb-2" />
              <span className="text-sm font-semibold text-gray-900">{team2.name}</span>
            </div>
          </div>
          <button
            onClick={() => onSelectTeam('')}
            className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Change team
          </button>
        </div>

        {/* Head to Head Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-sm text-blue-600 mb-1">Points</p>
            <div className="flex justify-center items-center space-x-4">
              <span className="text-xl font-bold">{team1.points}</span>
              <span className="text-gray-400">vs</span>
              <span className="text-xl font-bold">{team2.points}</span>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-sm text-blue-600 mb-1">Goals</p>
            <div className="flex justify-center items-center space-x-4">
              <span className="text-xl font-bold">{team1.goalsScored}</span>
              <span className="text-gray-400">vs</span>
              <span className="text-xl font-bold">{team2.goalsScored}</span>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-sm text-blue-600 mb-1">Wins</p>
            <div className="flex justify-center items-center space-x-4">
              <span className="text-xl font-bold">{team1.wins}</span>
              <span className="text-gray-400">vs</span>
              <span className="text-xl font-bold">{team2.wins}</span>
            </div>
          </div>
        </div>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stat" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={team1.name} fill="#2563eb" />
              <Bar dataKey={team2.name} fill="#7c3aed" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TeamComparison;