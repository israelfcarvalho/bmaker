import { Game } from "../game"

export class Bet {
    private _games: Game[] = []
    get games() {
        return this._games
    }
    set games(games: Game[]) {
        this._games = games.sort((a, b) => a.index - b.index)
    }

    log(){
        const gamesIndex = this._games.map(game => game.index)

        console.log(gamesIndex)
    }
}