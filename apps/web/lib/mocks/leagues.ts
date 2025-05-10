export interface League {
  id: string
  name: string
  season: string
  country: string
  logo?: string
}

export const leagues: League[] = [
  {
    id: 'premier-league',
    name: 'Premier League',
    season: '2023/2024',
    country: 'England',
    logo: '/leagues/premier-league.png'
  },
  {
    id: 'la-liga',
    name: 'La Liga',
    season: '2023/2024',
    country: 'Spain',
    logo: '/leagues/la-liga.png'
  },
  {
    id: 'serie-a',
    name: 'Serie A',
    season: '2023/2024',
    country: 'Italy',
    logo: '/leagues/serie-a.png'
  },
  {
    id: 'bundesliga',
    name: 'Bundesliga',
    season: '2023/2024',
    country: 'Germany',
    logo: '/leagues/bundesliga.png'
  },
  {
    id: 'ligue-1',
    name: 'Ligue 1',
    season: '2023/2024',
    country: 'France',
    logo: '/leagues/ligue-1.png'
  }
] 