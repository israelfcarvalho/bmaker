import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { League } from '@/lib/mocks/leagues'
import Link from 'next/link'

interface LeagueCardProps {
  league: League
}

export function LeagueCard({ league }: LeagueCardProps) {
  return (
    <Link href={`/leagues/${league.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-xl">{league.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Season: {league.season}
            </p>
            <p className="text-sm text-muted-foreground">
              Country: {league.country}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
} 