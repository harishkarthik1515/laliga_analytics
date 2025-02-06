export interface PlayerStats {
  id: string;
  name: string;
  position: string;
  nationality: string;
  age: number;
  goals: number;
  assists: number;
  minutesPlayed: number;
  matchesPlayed: number;
  yellowCards: number;
  redCards: number;
}

export interface TeamStats {
  id: string;
  name: string;
  logo: string;
  matchesPlayed: number;
  wins: number;
  losses: number;
  draws: number;
  goalsScored: number;
  goalsConceded: number;
  points: number;
  description: string;
  founded: number;
  stadium: string;
  manager: string;
  lastSeasonRank: number;
  players: PlayerStats[];
  historicalData: {
    season: string;
    points: number;
    position: number;
  }[];
}

export interface TeamCardProps {
  team: TeamStats;
  onClick: (id: string) => void;
}