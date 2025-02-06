import React from 'react';
import {
  BarChart as BarChartComponent,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import type { TeamStats as TeamStatsType } from '../types/team';

interface TeamStatsProps {
  team: TeamStatsType;
}

const COLORS = ['#2563eb', '#ef4444', '#10b981'];
const BLUE = '#2563eb';

const TeamStats: React.FC<TeamStatsProps> = ({ team }) => {
  const matchResults = [
    { name: 'Wins', value: team.wins },
    { name: 'Losses', value: team.losses },
    { name: 'Draws', value: team.draws }
  ];

  const goalStats = [
    { name: 'Goals Scored', value: team.goalsScored },
    { name: 'Goals Conceded', value: team.goalsConceded }
  ];

  // Sample performance trend data (simulated)
  const performanceTrend = [
    { match: 1, points: 3 },
    { match: 2, points: 6 },
    { match: 3, points: 7 },
    { match: 4, points: 10 },
    { match: 5, points: 13 },
    { match: 6, points: 16 },
    { match: 7, points: 19 },
    { match: 8, points: 22 }
  ];

  // Goal difference trend
  const goalDifferenceTrend = [
    { match: 1, difference: 2 },
    { match: 2, difference: 4 },
    { match: 3, difference: 3 },
    { match: 4, difference: 5 },
    { match: 5, difference: 7 },
    { match: 6, difference: 6 },
    { match: 7, difference: 8 },
    { match: 8, difference: 10 }
  ];

  return (
    <div className="space-y-8">
      {/* Team Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-blue-600">Matches Played</h3>
          <p className="text-3xl font-bold text-blue-900">{team.matchesPlayed}</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-blue-600">Points</h3>
          <p className="text-3xl font-bold text-blue-900">{team.points}</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-blue-600">Win Rate</h3>
          <p className="text-3xl font-bold text-blue-900">
            {((team.wins / team.matchesPlayed) * 100).toFixed(1)}%
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-blue-600">Goal Difference</h3>
          <p className="text-3xl font-bold text-blue-900">{team.goalsScored - team.goalsConceded}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Match Results Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Match Results Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={matchResults}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={100}
                  fill={BLUE}
                  dataKey="value"
                >
                  {matchResults.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Goals Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Goal Statistics</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChartComponent
                data={goalStats}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill={BLUE} />
              </BarChartComponent>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Points Progression Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Points Progression</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="match" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="points" stroke={BLUE} strokeWidth={2} dot={{ fill: BLUE }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Goal Difference Area Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Goal Difference Trend</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={goalDifferenceTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="match" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="difference" stroke={BLUE} fill={BLUE} fillOpacity={0.1} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;