import { Bet } from "../bet"
import { Game, GameProvider } from "../game"

export class Generator {
    private _bets: Bet[] = []
    private _games: Game[] = []

    constructor(
        private _totalGames: number,
    ) {
        this._init()
    }

    private _init(){
        this._games = Array.from({length: this._totalGames}, (_, index) => ({index: index + 1}))
    }

    generate(maxRepetitions: number, betSize: number){
        const gamesProvider = new GameProvider(this._games, maxRepetitions)

        let bet = new Bet()
        bet.games = gamesProvider.getGames(betSize)

        while(bet.games.length == betSize){
            this._bets.push(bet)
            bet = new Bet()
            bet.games = gamesProvider.getGames(betSize)
        }

        return this._bets
    }
}