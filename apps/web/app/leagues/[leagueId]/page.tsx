import { Tabs, TabsContent, TabsList, TabsTrigger } from '@workspace/ui/components/tabs'
import { LeagueStandings } from '@/components/leagues/league-standings'
import { LeagueMatches } from '@/components/leagues/league-matches'
import { notFound } from 'next/navigation'
import { leagues } from '@/lib/mocks/leagues'

interface LeaguePageProps {
  params: {
    leagueId: string
  }
}

export default function LeaguePage({ params }: LeaguePageProps) {
  const league = leagues.find((l) => l.id === params.leagueId)

  if (!league) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">{league.name}</h1>
      <Tabs defaultValue="standings" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="standings">Standings</TabsTrigger>
          <TabsTrigger value="matches">Matches</TabsTrigger>
        </TabsList>
        <TabsContent value="standings">
          <LeagueStandings leagueId={league.id} />
        </TabsContent>
        <TabsContent value="matches">
          <LeagueMatches leagueId={league.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
} 