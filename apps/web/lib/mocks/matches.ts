export interface Match {
  id: string
  date: string
  homeTeam: string
  awayTeam: string
  homeScore?: number
  awayScore?: number
  status: 'scheduled' | 'in_progress' | 'completed'
}

export interface LeagueMatches {
  leagueId: string
  matches: Match[]
}

export const matches: Record<string, LeagueMatches> = {
  'premier-league': {
    leagueId: 'premier-league',
    matches: [
      {
        id: 'arsenal-man-city',
        date: '2024-03-31',
        homeTeam: 'Arsenal',
        awayTeam: 'Manchester City',
        status: 'scheduled'
      },
      {
        id: 'liverpool-brighton',
        date: '2024-03-31',
        homeTeam: 'Liverpool',
        awayTeam: 'Brighton',
        homeScore: 2,
        awayScore: 1,
        status: 'completed'
      },
      {
        id: 'chelsea-man-utd',
        date: '2024-04-04',
        homeTeam: 'Chelsea',
        awayTeam: 'Manchester United',
        status: 'scheduled'
      }
    ]
  }
} 