import React, { useState } from 'react';
import { 
  BarChart, Search, Filter, TrendingUp, X, Users, History, 
  BarChart as ChartBar, Trophy, Calendar, Goal, 
  Map, PlayCircle, XCircle, MapPin, Video
} from 'lucide-react';
import TeamCard from './components/TeamCard';
import FileUpload from './components/FileUpload';
import TeamStats from './components/TeamStats';
import PlayerStats from './components/PlayerStats';
import TeamHistory from './components/TeamHistory';
import TeamComparison from './components/TeamComparison';
import { teamData } from './data/teamData';
import type { TeamStats as TeamStatsType } from './types/team';

function App() {
  const [teams] = useState<TeamStatsType[]>(teamData);
  const [selectedTeam, setSelectedTeam] = useState<TeamStatsType | null>(null);
  const [compareTeam, setCompareTeam] = useState<TeamStatsType | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'points' | 'goals' | 'wins'>('points');
  const [activeTab, setActiveTab] = useState<'overview' | 'players' | 'history' | 'comparison'>('overview');
  const [showHighlights, setShowHighlights] = useState(false);
  const [showLocations, setShowLocations] = useState(false);

  // Add team coordinates (approximate positions in Spain)
  const teamLocations = {
    'Real Madrid': { lat: 40.4168, lng: -3.7038, top: "45%", left: "45%" },
    'Barcelona': { lat: 41.3851, lng: 2.1734, top: "35%", left: "75%" },
    'Girona': { lat: 41.9794, lng: 2.8214, top: "30%", left: "80%" },
    'Atletico Madrid': { lat: 40.4168, lng: -3.7038, top: "45%", left: "43%" },
    'Athletic Bilbao': { lat: 43.2630, lng: -2.9350, top: "15%", left: "45%" },
    'Real Sociedad': { lat: 43.3183, lng: -1.9812, top: "12%", left: "48%" },
    'Real Betis': { lat: 37.3564, lng: -5.9815, top: "75%", left: "35%" },
    'Valencia': { lat: 39.4699, lng: -0.3776, top: "50%", left: "65%" },
    'Las Palmas': { lat: 28.1235, lng: -15.4366, top: "85%", left: "15%" },
    'Osasuna': { lat: 42.8167, lng: -1.6500, top: "20%", left: "50%" },
    'Villarreal': { lat: 39.9429, lng: -0.1020, top: "48%", left: "68%" },
    'Alavés': { lat: 42.8467, lng: -2.6716, top: "18%", left: "47%" },
    'Sevilla': { lat: 37.3891, lng: -5.9845, top: "73%", left: "33%" },
    'Mallorca': { lat: 39.5696, lng: 2.6502, top: "45%", left: "85%" },
    'Rayo Vallecano': { lat: 40.4168, lng: -3.7038, top: "45%", left: "47%" },
    'Celta Vigo': { lat: 42.2117, lng: -8.7387, top: "25%", left: "15%" },
    'Cádiz': { lat: 36.5271, lng: -6.2886, top: "85%", left: "30%" },
    'Granada': { lat: 37.1774, lng: -3.5986, top: "70%", left: "45%" },
    'Almería': { lat: 36.8340, lng: -2.4637, top: "75%", left: "55%" }
  };

  const handleFileUpload = async (file: File) => {
    console.log('File uploaded:', file);
  };

  const handleTeamClick = (id: string) => {
    const team = teams.find(t => t.id === id);
    if (team) {
      setSelectedTeam(team);
      setActiveTab('overview');
      setCompareTeam(null);
    }
  };

  const handleCompareTeam = (id: string) => {
    if (id === '') {
      setCompareTeam(null);
    } else {
      const team = teams.find(t => t.id === id);
      if (team && team.id !== selectedTeam?.id) {
        setCompareTeam(team);
      }
    }
  };

  const filteredTeams = teams
    .filter(team => 
      team.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'points':
          return b.points - a.points;
        case 'goals':
          return b.goalsScored - a.goalsScored;
        case 'wins':
          return b.wins - a.wins;
        default:
          return 0;
      }
    });

  // Calculate league statistics
  const totalGoals = teams.reduce((sum, team) => sum + team.goalsScored, 0);
  const averageGoalsPerGame = (totalGoals / (teams.length * teams[0].matchesPlayed)).toFixed(2);
  const topScorer = teams
    .flatMap(team => team.players)
    .reduce((max, player) => player.goals > (max?.goals || 0) ? player : max, null);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-blue-600/30">
            <div className="px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex items-center justify-between text-blue-100 text-sm">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Season 2023/24</span>
                  </div>
                  <div className="flex items-center">
                    <Goal className="w-4 h-4 mr-2" />
                    <span>Avg. Goals: {averageGoalsPerGame} per game</span>
                  </div>
                  {topScorer && (
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 mr-2" />
                      <span>Top Scorer: {topScorer.name} ({topScorer.goals} goals)</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setShowHighlights(true)}
                    className="flex items-center hover:text-white transition-colors group relative"
                  >
                    <PlayCircle className="w-4 h-4 mr-1" />
                    <span>Highlights</span>
                    <div className="absolute hidden group-hover:block top-full right-0 mt-1 w-48 text-xs bg-white/10 backdrop-blur-sm text-white px-2 py-1 rounded">
                      Watch match highlights
                    </div>
                  </button>
                  <div className="w-px h-4 bg-blue-600/30" />
                  <button 
                    onClick={() => setShowLocations(true)}
                    className="flex items-center hover:text-white transition-colors group relative"
                  >
                    <Map className="w-4 h-4 mr-1" />
                    <span>Locations</span>
                    <div className="absolute hidden group-hover:block top-full right-0 mt-1 w-48 text-xs bg-white/10 backdrop-blur-sm text-white px-2 py-1 rounded">
                      View team locations
                    </div>
                  </button>
                  <div className="w-px h-4 bg-blue-600/30" />
                  <FileUpload onFileUpload={handleFileUpload} />
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <BarChart className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">
                      La Liga Analytics
                    </h1>
                    <p className="text-blue-200 mt-1">
                      Comprehensive analysis and statistics for Spanish football
                    </p>
                  </div>
                </div>
                <div className="hidden lg:flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{teams.length}</div>
                    <div className="text-blue-200 text-sm">Teams</div>
                  </div>
                  <div className="h-8 w-px bg-blue-600/30" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{totalGoals}</div>
                    <div className="text-blue-200 text-sm">Total Goals</div>
                  </div>
                  <div className="h-8 w-px bg-blue-600/30" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{teams[0].matchesPlayed}</div>
                    <div className="text-blue-200 text-sm">Matchdays</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search teams..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-blue-400/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'points' | 'goals' | 'wins')}
                  className="px-4 py-3 rounded-lg bg-white/10 border border-blue-400/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="points">Sort by Points</option>
                  <option value="goals">Sort by Goals</option>
                  <option value="wins">Sort by Wins</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Match Highlights Modal */}
      {showHighlights && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[70]">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Match Highlights</h2>
                <button
                  onClick={() => setShowHighlights(false)}
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative group cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&h=450" 
                      alt="Match Highlight"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Video className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900">Real Madrid vs Barcelona</h4>
                    <p className="text-sm text-gray-600">El Clásico Highlights - Matchday 26</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { teams: "Atletico vs Sevilla", day: "Matchday 25" },
                    { teams: "Valencia vs Athletic", day: "Matchday 25" },
                    { teams: "Girona vs Real Sociedad", day: "Matchday 24" },
                    { teams: "Betis vs Alaves", day: "Matchday 24" },
                    { teams: "Real Madrid vs Rayo", day: "Matchday 24" },
                    { teams: "Barcelona vs Getafe", day: "Matchday 24" }
                  ].map((match, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 cursor-pointer hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-2">
                        <PlayCircle className="w-4 h-4 text-blue-600" />
                        <div>
                          <p className="font-medium text-sm text-gray-900">{match.teams}</p>
                          <p className="text-xs text-gray-600">{match.day}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Team Locations Modal */}
      {showLocations && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[70]">
          <div className="bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">La Liga Team Locations</h2>
                <button
                  onClick={() => setShowLocations(false)}
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="aspect-[16/10] bg-white rounded-lg relative overflow-hidden">
                  <img 
                    src="https://www.mapscd.com/wp-content/uploads/2015/07/spain-presentation-map.jpg"
                    alt="Spain Map"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  
                  {teams.map((team) => {
                    const location = teamLocations[team.name as keyof typeof teamLocations];
                    if (!location) return null;

                    return (
                      <div
                        key={team.id}
                        className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          top: location.top,
                          left: location.left
                        }}
                      >
                        <div className="relative">
                          <div className="w-3 h-3 bg-blue-600 rounded-full ring-4 ring-blue-600/30 animate-pulse" />
                          <MapPin className="absolute -top-5 -left-2 w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        
                        <div className="absolute hidden group-hover:block bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-white rounded-lg shadow-lg p-4 text-sm z-10">
                          <div className="flex items-start space-x-3">
                            <img
                              src={team.logo}
                              alt={`${team.name} logo`}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">{team.name}</h4>
                              <p className="text-gray-600 text-xs">{team.stadium}</p>
                              <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-blue-50 p-1 rounded">
                                  <span className="text-blue-700">Points:</span> {team.points}
                                </div>
                                <div className="bg-blue-50 p-1 rounded">
                                  <span className="text-blue-700">Rank:</span> {teams.indexOf(team) + 1}
                                </div>
                                <div className="bg-blue-50 p-1 rounded">
                                  <span className="text-blue-700">Wins:</span> {team.wins}
                                </div>
                                <div className="bg-blue-50 p-1 rounded">
                                  <span className="text-blue-700">Goals:</span> {team.goalsScored}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 pt-2 border-t border-gray-100 text-xs text-gray-500">
                            Founded: {team.founded}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                    Hover over markers to see team details
                  </p>
                  <p className="text-xs text-gray-500">
                    {teams.length} teams in La Liga
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[280px] pb-8">
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Team Statistics</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <TrendingUp className="w-4 h-4" />
              <span>Showing {filteredTeams.length} teams</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeams.map((team) => (
              <TeamCard
                key={team.id}
                team={team}
                onClick={handleTeamClick}
              />
            ))}
          </div>
        </section>

        {selectedTeam && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[60]">
            <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedTeam.name}</h2>
                    <p className="text-gray-600">Founded in {selectedTeam.founded}</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedTeam(null);
                      setCompareTeam(null);
                    }}
                    className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="mb-6 bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700">{selectedTeam.description}</p>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Stadium:</span> {selectedTeam.stadium}
                    </div>
                    <div>
                      <span className="font-semibold">Manager:</span> {selectedTeam.manager}
                    </div>
                    <div>
                      <span className="font-semibold">Last Season:</span> {selectedTeam.lastSeasonRank}th
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 mb-6 border-b">
                  <button
                    className={`flex items-center px-4 py-2 border-b-2 ${
                      activeTab === 'overview'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('overview')}
                  >
                    <ChartBar className="w-4 h-4 mr-2" />
                    Overview
                  </button>
                  <button
                    className={`flex items-center px-4 py-2 border-b-2 ${
                      activeTab === 'players'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('players')}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Players
                  </button>
                  <button
                    className={`flex items-center px-4 py-2 border-b-2 ${
                      activeTab === 'history'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('history')}
                  >
                    <History className="w-4 h-4 mr-2" />
                    History
                  </button>
                  <button
                    className={`flex items-center px-4 py-2 border-b-2 ${
                      activeTab === 'comparison'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('comparison')}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Compare
                  </button>
                </div>

                {activeTab === 'overview' && <TeamStats team={selectedTeam} />}
                {activeTab === 'players' && <PlayerStats team={selectedTeam} />}
                {activeTab === 'history' && <TeamHistory team={selectedTeam} />}
                {activeTab === 'comparison' && (
                  <TeamComparison
                    team1={selectedTeam}
                    team2={compareTeam}
                    teams={teams.filter(t => t.id !== selectedTeam.id)}
                    onSelectTeam={handleCompareTeam}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;