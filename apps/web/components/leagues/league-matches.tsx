import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { matches } from '@/lib/mocks/matches'
import { format } from 'date-fns'

interface LeagueMatchesProps {
  leagueId: string
}

export function LeagueMatches({ leagueId }: LeagueMatchesProps) {
  const leagueMatches = matches[leagueId]

  if (!leagueMatches) {
    return <div>No matches available for this league</div>
  }

  // Group matches by date
  const matchesByDate = leagueMatches.matches.reduce((acc, match) => {
    const date = match.date
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(match)
    return acc
  }, {} as Record<string, typeof leagueMatches.matches>)

  return (
    <div className="space-y-6">
      {Object.entries(matchesByDate).map(([date, dateMatches]) => (
        <div key={date}>
          <h2 className="text-xl font-semibold mb-4">
            {format(new Date(date), 'EEEE, MMMM d, yyyy')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dateMatches.map((match) => (
              <Card key={match.id}>
                <CardHeader>
                  <CardTitle className="text-center">
                    {match.status === 'completed'
                      ? `${match.homeScore} - ${match.awayScore}`
                      : 'VS'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{match.homeTeam}</span>
                    <span className="text-muted-foreground">vs</span>
                    <span className="font-medium">{match.awayTeam}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
} 