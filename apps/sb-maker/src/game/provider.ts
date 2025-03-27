import { Game } from "./game";


export class GameProvider {
    private _gamesProvider: Game[][] = []
    private _gamesUsedCurrently: Game[][] = []

    constructor(
        games: Game[],
        private _maxRepetitions: number,
    ){
        this._init(games)
    }

    private _init(games: Game[]) {
        for(let i = 0; i <= this._maxRepetitions; i++){
            this._gamesProvider.push([])
            this._gamesUsedCurrently.push([])
        }

        this._gamesProvider[0] = games
    }

    getGames(size: number): Game[] {
        let level = 0
        const games: Game[] = []

        while(level < this._maxRepetitions && games.length < size){
            const gamesToFetch = this._gamesProvider[level]        
            
            if(gamesToFetch.length === 0){
                level++
                continue
            }

            const gameIndex = Math.floor(Math.random() * gamesToFetch.length)
            console.log(gameIndex)
            const game = gamesToFetch.splice(gameIndex, 1)[0]

            this._gamesUsedCurrently[level+1].push(game)
            games.push(game)
        }

        for (let index = 0; index < this._maxRepetitions; index++) {
            this._gamesProvider[index] = this._gamesProvider[index].concat(this._gamesUsedCurrently[index])
            this._gamesUsedCurrently[index] = []
        }

        return games
    }
}