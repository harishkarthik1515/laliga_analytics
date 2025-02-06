import React from 'react';
import { Trophy, Goal, Calendar } from 'lucide-react';
import type { TeamCardProps } from '../types/team';

const TeamCard: React.FC<TeamCardProps> = ({ team, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(team.id)}
    >
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={team.logo}
            alt={`${team.name} logo`}
            className="w-16 h-16 object-contain rounded-full border-2 border-blue-100"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-900">{team.name}</h3>
            <p className="text-blue-600 font-semibold">{team.points} pts</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="bg-blue-50 p-2 rounded-md">
            <div className="flex items-center justify-center text-blue-600 mb-1">
              <Trophy className="w-4 h-4" />
            </div>
            <p className="text-center text-gray-600">
              <span className="block font-semibold text-gray-900">{team.wins}</span>
              Wins
            </p>
          </div>
          <div className="bg-blue-50 p-2 rounded-md">
            <div className="flex items-center justify-center text-blue-600 mb-1">
              <Goal className="w-4 h-4" />
            </div>
            <p className="text-center text-gray-600">
              <span className="block font-semibold text-gray-900">{team.goalsScored}</span>
              Goals
            </p>
          </div>
          <div className="bg-blue-50 p-2 rounded-md">
            <div className="flex items-center justify-center text-blue-600 mb-1">
              <Calendar className="w-4 h-4" />
            </div>
            <p className="text-center text-gray-600">
              <span className="block font-semibold text-gray-900">{team.matchesPlayed}</span>
              Matches
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;