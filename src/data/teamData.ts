import { TeamStats } from '../types/team';

export const teamData: TeamStats[] = [
  {
    id: '1',
    name: 'Real Madrid',
    logo: 'https://images.unsplash.com/photo-1580051745102-6c2e4e42fc7e?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 19,
    losses: 3,
    draws: 4,
    goalsScored: 55,
    goalsConceded: 18,
    points: 61,
    description: "Real Madrid CF, founded in 1902, is one of the most successful football clubs in history. Known for their 'Galacticos' era and record Champions League titles, they continue to set standards in Spanish and European football.",
    founded: 1902,
    stadium: "Santiago Bernabéu",
    manager: "Carlo Ancelotti",
    lastSeasonRank: 2,
    players: [
      {
        id: 'rm1',
        name: 'Jude Bellingham',
        position: 'Midfielder',
        nationality: 'England',
        age: 20,
        goals: 16,
        assists: 6,
        minutesPlayed: 1980,
        matchesPlayed: 22,
        yellowCards: 4,
        redCards: 0
      },
      {
        id: 'rm2',
        name: 'Vinicius Jr',
        position: 'Forward',
        nationality: 'Brazil',
        age: 23,
        goals: 12,
        assists: 8,
        minutesPlayed: 1800,
        matchesPlayed: 20,
        yellowCards: 3,
        redCards: 1
      },
      {
        id: 'rm3',
        name: 'Toni Kroos',
        position: 'Midfielder',
        nationality: 'Germany',
        age: 34,
        goals: 2,
        assists: 12,
        minutesPlayed: 2160,
        matchesPlayed: 24,
        yellowCards: 1,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 68, position: 3 },
      { season: '2019/20', points: 87, position: 1 },
      { season: '2020/21', points: 84, position: 2 },
      { season: '2021/22', points: 86, position: 1 },
      { season: '2022/23', points: 78, position: 2 }
    ]
  },
  {
    id: '2',
    name: 'Barcelona',
    logo: 'https://images.unsplash.com/photo-1585134259226-0a845f1e6070?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 17,
    losses: 4,
    draws: 5,
    goalsScored: 52,
    goalsConceded: 25,
    points: 56,
    description: "FC Barcelona, established in 1899, is renowned for its distinctive 'tiki-taka' style and La Masia academy. The club's motto 'Més que un club' (More than a club) reflects its deep cultural significance in Catalonia.",
    founded: 1899,
    stadium: "Spotify Camp Nou",
    manager: "Xavi Hernández",
    lastSeasonRank: 1,
    players: [
      {
        id: 'fcb1',
        name: 'Robert Lewandowski',
        position: 'Forward',
        nationality: 'Poland',
        age: 35,
        goals: 14,
        assists: 5,
        minutesPlayed: 2070,
        matchesPlayed: 23,
        yellowCards: 2,
        redCards: 0
      },
      {
        id: 'fcb2',
        name: 'Frenkie de Jong',
        position: 'Midfielder',
        nationality: 'Netherlands',
        age: 26,
        goals: 3,
        assists: 7,
        minutesPlayed: 1890,
        matchesPlayed: 21,
        yellowCards: 3,
        redCards: 0
      },
      {
        id: 'fcb3',
        name: 'Pedri',
        position: 'Midfielder',
        nationality: 'Spain',
        age: 21,
        goals: 4,
        assists: 6,
        minutesPlayed: 1620,
        matchesPlayed: 18,
        yellowCards: 1,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 87, position: 1 },
      { season: '2019/20', points: 82, position: 2 },
      { season: '2020/21', points: 79, position: 3 },
      { season: '2021/22', points: 73, position: 2 },
      { season: '2022/23', points: 88, position: 1 }
    ]
  },
  {
    id: '3',
    name: 'Girona',
    logo: 'https://images.unsplash.com/photo-1522778034537-20a2486be803?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 18,
    losses: 3,
    draws: 5,
    goalsScored: 54,
    goalsConceded: 29,
    points: 59,
    description: "Girona FC, founded in 1930, has shown remarkable progress in recent years. Part of the City Football Group, they've established themselves as a competitive force in La Liga with an attacking style of play.",
    founded: 1930,
    stadium: "Montilivi",
    manager: "Míchel",
    lastSeasonRank: 10,
    players: [
      {
        id: 'gir1',
        name: 'Artem Dovbyk',
        position: 'Forward',
        nationality: 'Ukraine',
        age: 26,
        goals: 15,
        assists: 6,
        minutesPlayed: 2160,
        matchesPlayed: 24,
        yellowCards: 3,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 37, position: 18 },
      { season: '2019/20', points: 48, position: 15 },
      { season: '2020/21', points: 71, position: 5 },
      { season: '2021/22', points: 53, position: 11 },
      { season: '2022/23', points: 49, position: 10 }
    ]
  },
  {
    id: '4',
    name: 'Atletico Madrid',
    logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 16,
    losses: 5,
    draws: 5,
    goalsScored: 48,
    goalsConceded: 24,
    points: 53,
    description: "Atlético Madrid, founded in 1903, is known for its passionate fans and defensive prowess. Under Diego Simeone's leadership, they've emerged as a formidable force in Spanish football.",
    founded: 1903,
    stadium: "Metropolitano",
    manager: "Diego Simeone",
    lastSeasonRank: 3,
    players: [
      {
        id: 'atm1',
        name: 'Antoine Griezmann',
        position: 'Forward',
        nationality: 'France',
        age: 32,
        goals: 15,
        assists: 8,
        minutesPlayed: 2160,
        matchesPlayed: 24,
        yellowCards: 2,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 76, position: 2 },
      { season: '2019/20', points: 70, position: 3 },
      { season: '2020/21', points: 86, position: 1 },
      { season: '2021/22', points: 71, position: 3 },
      { season: '2022/23', points: 77, position: 3 }
    ]
  },
  {
    id: '5',
    name: 'Athletic Bilbao',
    logo: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 14,
    losses: 7,
    draws: 5,
    goalsScored: 42,
    goalsConceded: 28,
    points: 47,
    description: "Athletic Club Bilbao, founded in 1898, is unique for its policy of only fielding players of Basque descent. This philosophy hasn't prevented them from being one of only three clubs never relegated from La Liga.",
    founded: 1898,
    stadium: "San Mamés",
    manager: "Ernesto Valverde",
    lastSeasonRank: 8,
    players: [
      {
        id: 'ath1',
        name: 'Iñaki Williams',
        position: 'Forward',
        nationality: 'Ghana',
        age: 29,
        goals: 8,
        assists: 5,
        minutesPlayed: 2070,
        matchesPlayed: 23,
        yellowCards: 4,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 53, position: 8 },
      { season: '2019/20', points: 51, position: 11 },
      { season: '2020/21', points: 46, position: 10 },
      { season: '2021/22', points: 55, position: 8 },
      { season: '2022/23', points: 51, position: 8 }
    ]
  },
  {
    id: '6',
    name: 'Real Sociedad',
    logo: 'https://images.unsplash.com/photo-1550881111-7cfde14b8073?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 13,
    losses: 8,
    draws: 5,
    goalsScored: 40,
    goalsConceded: 30,
    points: 44,
    description: "Real Sociedad, founded in 1909, is known for its commitment to youth development and attractive playing style. The club has strong ties to the Basque community and has produced many notable Spanish internationals.",
    founded: 1909,
    stadium: "Reale Arena",
    manager: "Imanol Alguacil",
    lastSeasonRank: 4,
    players: [
      {
        id: 'rs1',
        name: 'Mikel Oyarzabal',
        position: 'Forward',
        nationality: 'Spain',
        age: 26,
        goals: 10,
        assists: 4,
        minutesPlayed: 1980,
        matchesPlayed: 22,
        yellowCards: 3,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 50, position: 9 },
      { season: '2019/20', points: 56, position: 6 },
      { season: '2020/21', points: 62, position: 5 },
      { season: '2021/22', points: 64, position: 6 },
      { season: '2022/23', points: 71, position: 4 }
    ]
  },
  {
    id: '7',
    name: 'Real Betis',
    logo: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 12,
    losses: 9,
    draws: 5,
    goalsScored: 36,
    goalsConceded: 32,
    points: 41,
    description: "Real Betis, founded in 1907, is known for its passionate fanbase and the historic Benito Villamarín stadium. The club has a rich history of playing attractive football and has seen a resurgence in recent years.",
    founded: 1907,
    stadium: "Benito Villamarín",
    manager: "Manuel Pellegrini",
    lastSeasonRank: 6,
    players: [
      {
        id: 'rb1',
        name: 'Isco',
        position: 'Midfielder',
        nationality: 'Spain',
        age: 31,
        goals: 6,
        assists: 7,
        minutesPlayed: 1890,
        matchesPlayed: 21,
        yellowCards: 5,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 50, position: 10 },
      { season: '2019/20', points: 39, position: 15 },
      { season: '2020/21', points: 61, position: 6 },
      { season: '2021/22', points: 65, position: 5 },
      { season: '2022/23', points: 60, position: 6 }
    ]
  },
  {
    id: '8',
    name: 'Valencia',
    logo: 'https://images.unsplash.com/photo-1583246805276-6a44c5a4c8ca?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 10,
    losses: 10,
    draws: 6,
    goalsScored: 35,
    goalsConceded: 37,
    points: 36,
    description: "Valencia CF, founded in 1919, is one of Spain's most historic clubs. With six La Liga titles and a rich European history, they're known for their passionate fans and the iconic Mestalla stadium.",
    founded: 1919,
    stadium: "Mestalla",
    manager: "Rubén Baraja",
    lastSeasonRank: 16,
    players: [
      {
        id: 'val1',
        name: 'Hugo Duro',
        position: 'Forward',
        nationality: 'Spain',
        age: 24,
        goals: 8,
        assists: 3,
        minutesPlayed: 1980,
        matchesPlayed: 22,
        yellowCards: 4,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 61, position: 4 },
      { season: '2019/20', points: 53, position: 9 },
      { season: '2020/21', points: 43, position: 13 },
      { season: '2021/22', points: 48, position: 9 },
      { season: '2022/23', points: 42, position: 16 }
    ]
  },
  {
    id: '9',
    name: 'Las Palmas',
    logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 10,
    losses: 11,
    draws: 5,
    goalsScored: 28,
    goalsConceded: 31,
    points: 35,
    description: "UD Las Palmas, founded in 1949, represents the Canary Islands in La Liga. Known for their technical style of play and development of local talent, they've returned to the top flight with an attractive brand of football.",
    founded: 1949,
    stadium: "Gran Canaria",
    manager: "García Pimienta",
    lastSeasonRank: 1,
    players: [
      {
        id: 'lp1',
        name: 'Kirian Rodríguez',
        position: 'Midfielder',
        nationality: 'Spain',
        age: 27,
        goals: 4,
        assists: 5,
        minutesPlayed: 1890,
        matchesPlayed: 21,
        yellowCards: 6,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 42, position: 12 },
      { season: '2019/20', points: 70, position: 3 },
      { season: '2020/21', points: 60, position: 9 },
      { season: '2021/22', points: 68, position: 4 },
      { season: '2022/23', points: 82, position: 1 }
    ]
  },
  {
    id: '10',
    name: 'Osasuna',
    logo: 'https://images.unsplash.com/photo-1522778034537-20a2486be803?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 9,
    losses: 12,
    draws: 5,
    goalsScored: 29,
    goalsConceded: 38,
    points: 32,
    description: "CA Osasuna, founded in 1920, represents Navarre in La Liga. Known for their intense playing style and the atmospheric El Sadar stadium, they embody the fighting spirit of their region.",
    founded: 1920,
    stadium: "El Sadar",
    manager: "Jagoba Arrasate",
    lastSeasonRank: 7,
    players: [
      {
        id: 'os1',
        name: 'Ante Budimir',
        position: 'Forward',
        nationality: 'Croatia',
        age: 32,
        goals: 7,
        assists: 2,
        minutesPlayed: 1800,
        matchesPlayed: 20,
        yellowCards: 3,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 44, position: 10 },
      { season: '2019/20', points: 52, position: 10 },
      { season: '2020/21', points: 44, position: 11 },
      { season: '2021/22', points: 47, position: 10 },
      { season: '2022/23', points: 53, position: 7 }
    ]
  },
  {
    id: '11',
    name: 'Villarreal',
    logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 8,
    losses: 12,
    draws: 6,
    goalsScored: 39,
    goalsConceded: 47,
    points: 30,
    description: "Villarreal CF, founded in 1923, is known as 'The Yellow Submarine'. Despite being from a small city, they've achieved remarkable success in both domestic and European competitions.",
    founded: 1923,
    stadium: "Estadio de la Cerámica",
    manager: "Marcelino García Toral",
    lastSeasonRank: 5,
    players: [
      {
        id: 'vil1',
        name: 'Gerard Moreno',
        position: 'Forward',
        nationality: 'Spain',
        age: 31,
        goals: 9,
        assists: 4,
        minutesPlayed: 1710,
        matchesPlayed: 19,
        yellowCards: 2,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 44, position: 14 },
      { season: '2019/20', points: 60, position: 5 },
      { season: '2020/21', points: 58, position: 7 },
      { season: '2021/22', points: 59, position: 7 },
      { season: '2022/23', points: 64, position: 5 }
    ]
  },
  {
    id: '12',
    name: 'Alavés',
    logo: 'https://images.unsplash.com/photo-1522778034537-20a2486be803?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 7,
    losses: 13,
    draws: 6,
    goalsScored: 25,
    goalsConceded: 37,
    points: 27,
    description: "Deportivo Alavés, founded in 1921, represents Vitoria-Gasteiz in La Liga. Known for their resilient defensive style and passionate support, they've established themselves as a competitive force in Spanish football.",
    founded: 1921,
    stadium: "Mendizorroza",
    manager: "Luis García Plaza",
    lastSeasonRank: 1,
    players: [
      {
        id: 'ala1',
        name: 'Luis Rioja',
        position: 'Midfielder',
        nationality: 'Spain',
        age: 30,
        goals: 5,
        assists: 3,
        minutesPlayed: 1980,
        matchesPlayed: 22,
        yellowCards: 4,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 50, position: 11 },
      { season: '2019/20', points: 39, position: 16 },
      { season: '2020/21', points: 38, position: 16 },
      { season: '2021/22', points: 31, position: 20 },
      { season: '2022/23', points: 76, position: 1 }
    ]
  },
  {
    id: '13',
    name: 'Sevilla',
    logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 6,
    losses: 12,
    draws: 8,
    goalsScored: 30,
    goalsConceded: 39,
    points: 26,
    description: "Sevilla FC, founded in 1890, is one of Spain's oldest clubs. Known for their record number of Europa League titles and excellent scouting network, they're a major force in Spanish and European football.",
    founded: 1890,
    stadium: "Ramón Sánchez-Pizjuán",
    manager: "Quique Sánchez Flores",
    lastSeasonRank: 12,
    players: [
      {
        id: 'sev1',
        name: 'Youssef En-Nesyri',
        position: 'Forward',
        nationality: 'Morocco',
        age: 26,
        goals: 8,
        assists: 2,
        minutesPlayed: 1800,
        matchesPlayed: 20,
        yellowCards: 3,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 59, position: 6 },
      { season: '2019/20', points: 70, position: 4 },
      { season: '2020/21', points: 77, position: 4 },
      { season: '2021/22', points: 70, position: 4 },
      { season: '2022/23', points: 49, position: 12 }
    ]
  },
  {
    id: '14',
    name: 'Mallorca',
    logo: 'https://images.unsplash.com/photo-1522778034537-20a2486be803?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 6,
    losses: 12,
    draws: 8,
    goalsScored: 24,
    goalsConceded: 36,
    points: 26,
    description: "RCD Mallorca, founded in 1916, represents the Balearic Islands in La Liga. The club has a rich history of developing talent and playing attractive football, while maintaining strong ties to their island community.",
    founded: 1916,
    stadium: "Visit Mallorca Estadi",
    manager: "Javier Aguirre",
    lastSeasonRank: 9,
    players: [
      {
        id: 'mal1',
        name: 'Vedat Muriqi',
        position: 'Forward',
        nationality: 'Kosovo',
        age: 29,
        goals: 6,
        assists: 3,
        minutesPlayed: 1890,
        matchesPlayed: 21,
        yellowCards: 5,
        redCards: 1
      }
    ],
    historicalData: [
      { season: '2018/19', points: 41, position: 19 },
      { season: '2019/20', points: 25, position: 19 },
      { season: '2020/21', points: 68, position: 2 },
      { season: '2021/22', points: 39, position: 16 },
      { season: '2022/23', points: 50, position: 9 }
    ]
  },
  {
    id: '15',
    name: 'Rayo Vallecano',
    logo: 'https://images.unsplash.com/photo-1522778034537-20a2486be803?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 6,
    losses: 12,
    draws: 8,
    goalsScored: 25,
    goalsConceded: 39,
    points: 26,
    description: "Rayo Vallecano, founded in 1924, represents the working-class Vallecas district of Madrid. Known for their passionate fans and community involvement, they play an attacking style of football.",
    founded: 1924,
    stadium: "Vallecas",
    manager: "Francisco Rodríguez",
    lastSeasonRank: 11,
    players: [
      {
        id: 'ray1',
        name: 'Raúl de Tomás',
        position: 'Forward',
        nationality: 'Spain',
        age: 29,
        goals: 5,
        assists: 2,
        minutesPlayed: 1620,
        matchesPlayed: 18,
        yellowCards: 4,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 32, position: 20 },
      { season: '2019/20', points: 55, position: 7 },
      { season: '2020/21', points: 78, position: 1 },
      { season: '2021/22', points: 42, position: 12 },
      { season: '2022/23', points: 47, position: 11 }
    ]
  },
  {
    id: '16',
    name: 'Celta Vigo',
    logo: 'https://images.unsplash.com/photo-1522778034537-20a2486be803?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 5,
    losses: 13,
    draws: 8,
    goalsScored: 27,
    goalsConceded: 39,
    points: 23,
    description: "RC Celta de Vigo, founded in 1923, represents Galicia in La Liga. The club is known for its youth academy and commitment to attractive, possession-based football.",
    founded: 1923,
    stadium: "Balaídos",
    manager: "Rafa Benítez",
    lastSeasonRank: 13,
    players: [
      {
        id: 'cel1',
        name: 'Iago Aspas',
        position: 'Forward',
        nationality: 'Spain',
        age: 36,
        goals: 5,
        assists: 4,
        minutesPlayed: 1980,
        matchesPlayed: 22,
        yellowCards: 5,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 53, position: 17 },
      { season: '2019/20', points: 37, position: 17 },
      { season: '2020/21', points: 53, position: 8 },
      { season: '2021/22', points: 46, position: 11 },
      { season: '2022/23', points: 43, position: 13 }
    ]
  },
  {
    id: '17',
    name: 'Cádiz',
    logo: 'https://images.unsplash.com/photo-1522778034537-20a2486be803?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 4,
    losses: 14,
    draws: 8,
    goalsScored: 20,
    goalsConceded: 41,
    points: 20,
    description: "Cádiz CF, founded in 1910, represents one of Spain's oldest cities in La Liga. Known for their defensive resilience and passionate support, they've become a tough opponent for any team.",
    founded: 1910,
    stadium: "Nuevo Mirandilla",
    manager: "Mauricio Pellegrino",
    lastSeasonRank: 14,
    players: [
      {
        id: 'cad1',
        name: 'Chris Ramos',
        position: 'Forward',
        nationality: 'Spain',
        age: 25,
        goals: 4,
        assists: 2,
        minutesPlayed: 1710,
        matchesPlayed: 19,
        yellowCards: 3,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 56, position: 7 },
      { season: '2019/20', points: 69, position: 2 },
      { season: '2020/21', points: 44, position: 12 },
      { season: '2021/22', points: 39, position: 17 },
      { season: '2022/23', points: 42, position: 14 }
    ]
  },
  {
    id: '18',
    name: 'Granada',
    logo: 'https://images.unsplash.com/photo-1522778034537-20a2486be803?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 3,
    losses: 15,
    draws: 8,
    goalsScored: 27,
    goalsConceded: 47,
    points: 17,
    description: "Granada CF, founded in 1931, represents the historic city of Granada in La Liga. The club has shown remarkable progress in recent years, known for their tactical flexibility and strong home performances.",
    founded: 1931,
    stadium: "Nuevo Los Cármenes",
    manager: "Alexander Medina",
    lastSeasonRank: 1,
    players: [
      {
        id: 'gra1',
        name: 'Lucas Boyé',
        position: 'Forward',
        nationality: 'Argentina',
        age: 27,
        goals: 6,
        assists: 2,
        minutesPlayed: 1800,
        matchesPlayed: 20,
        yellowCards: 4,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 74, position: 2 },
      { season: '2019/20', points: 56, position: 7 },
      { season: '2020/21', points: 46, position: 9 },
      { season: '2021/22', points: 31, position: 18 },
      { season: '2022/23', points: 72, position: 1 }
    ]
  },
  {
    id: '19',
    name: 'Almería',
    logo: 'https://images.unsplash.com/photo-1522778034537-20a2486be803?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 2,
    losses: 17,
    draws: 7,
    goalsScored: 25,
    goalsConceded: 51,
    points: 13,
    description: "UD Almería, founded in 1989, is one of La Liga's youngest clubs. Known for their excellent youth academy and modern facilities, they represent the province of Almería with an attacking style of play.",
    founded: 1989,
    stadium: "Power Horse Stadium",
    manager: "Gaizka Garitano",
    lastSeasonRank: 17,
    players: [
      {
        id: 'alm1',
        name: 'Largie Ramazani',
        position: 'Forward',
        nationality: 'Belgium',
        age: 22,
        goals: 4,
        assists: 3,
        minutesPlayed: 1710,
        matchesPlayed: 19,
        yellowCards: 3,
        redCards: 0
      }
    ],
    historicalData: [
      { season: '2018/19', points: 50, position: 10 },
      { season: '2019/20', points: 61, position: 4 },
      { season: '2020/21', points: 61, position: 4 },
      { season: '2021/22', points: 81, position: 1 },
      { season: '2022/23', points: 41, position: 17 }
    ]
  },
  {
    id: '20',
    name: 'Real Mallorca',
    logo: 'https://images.unsplash.com/photo-1522778034537-20a2486be803?auto=format&fit=crop&w=200&h=200',
    matchesPlayed: 26,
    wins: 2,
    losses: 18,
    draws: 6,
    goalsScored: 22,
    goalsConceded: 53,
    points: 12,
    description: "RCD Mallorca, founded in 1916, is the pride of the Balearic Islands. The club has a rich history of developing young talent and playing attractive football, while maintaining strong ties to their island community.",
    founded: 1916,
    stadium: "Son Moix",
    manager: "Javier Aguirre",
    lastSeasonRank: 15,
    players: [
      {
        id: 'mall1',
        name: 'Vedat Muriqi',
        position: 'Forward',
        nationality: 'Kosovo',
        age: 29,
        goals: 5,
        assists: 2,
        minutesPlayed: 1890,
        matchesPlayed: 21,
        yellowCards: 6,
        redCards: 1
      }
    ],
    historicalData: [
      { season: '2018/19', points: 44, position: 19 },
      { season: '2019/20', points: 25, position: 19 },
      { season: '2020/21', points: 68, position: 2 },
      { season: '2021/22', points: 39, position: 16 },
      { season: '2022/23', points: 44, position: 15 }
    ]
  }
];