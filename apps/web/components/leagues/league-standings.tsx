import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@workspace/ui/components/table'
import { standings } from '@/lib/mocks/standings'

interface LeagueStandingsProps {
  leagueId: string
}

export function LeagueStandings({ leagueId }: LeagueStandingsProps) {
  const leagueStandings = standings[leagueId]

  if (!leagueStandings) {
    return <div>No standings available for this league</div>
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Pos</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-right">P</TableHead>
            <TableHead className="text-right">W</TableHead>
            <TableHead className="text-right">D</TableHead>
            <TableHead className="text-right">L</TableHead>
            <TableHead className="text-right">GF</TableHead>
            <TableHead className="text-right">GA</TableHead>
            <TableHead className="text-right">GD</TableHead>
            <TableHead className="text-right">Pts</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leagueStandings.teams.map((team) => (
            <TableRow key={team.id}>
              <TableCell>{team.position}</TableCell>
              <TableCell>{team.name}</TableCell>
              <TableCell className="text-right">{team.played}</TableCell>
              <TableCell className="text-right">{team.won}</TableCell>
              <TableCell className="text-right">{team.drawn}</TableCell>
              <TableCell className="text-right">{team.lost}</TableCell>
              <TableCell className="text-right">{team.goalsFor}</TableCell>
              <TableCell className="text-right">{team.goalsAgainst}</TableCell>
              <TableCell className="text-right">{team.goalDifference}</TableCell>
              <TableCell className="text-right font-medium">
                {team.points}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 