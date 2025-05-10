export interface Team {
  id: string
  name: string
  position: number
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  points: number
}

export interface LeagueStandings {
  leagueId: string
  teams: Team[]
}

export const standings: Record<string, LeagueStandings> = {
  'premier-league': {
    leagueId: 'premier-league',
    teams: [
      {
        id: 'arsenal',
        name: 'Arsenal',
        position: 1,
        played: 30,
        won: 22,
        drawn: 5,
        lost: 3,
        goalsFor: 75,
        goalsAgainst: 26,
        goalDifference: 49,
        points: 71
      },
      {
        id: 'liverpool',
        name: 'Liverpool',
        position: 2,
        played: 30,
        won: 21,
        drawn: 7,
        lost: 2,
        goalsFor: 72,
        goalsAgainst: 30,
        goalDifference: 42,
        points: 70
      },
      // Add more teams as needed
    ]
  }
} 