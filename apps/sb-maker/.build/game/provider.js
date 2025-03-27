"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameProvider = void 0;
class GameProvider {
    constructor(games, _maxRepetitions) {
        this._maxRepetitions = _maxRepetitions;
        this._gamesProvider = [];
        this._gamesUsedCurrently = [];
        this._init(games);
    }
    _init(games) {
        for (let i = 0; i <= this._maxRepetitions; i++) {
            this._gamesProvider.push([]);
            this._gamesUsedCurrently.push([]);
        }
        this._gamesProvider[0] = games;
    }
    getGames(size) {
        let level = 0;
        const games = [];
        while (level < this._maxRepetitions && games.length < size) {
            const gamesToFetch = this._gamesProvider[level];
            if (gamesToFetch.length === 0) {
                level++;
                continue;
            }
            const gameIndex = Math.floor(Math.random() * gamesToFetch.length);
            console.log(gameIndex, new Date().toTimeString());
            const game = gamesToFetch.splice(gameIndex, 1)[0];
            this._gamesUsedCurrently[level + 1].push(game);
            games.push(game);
        }
        for (let index = 0; index < this._maxRepetitions; index++) {
            this._gamesProvider[index] = this._gamesProvider[index].concat(this._gamesUsedCurrently[index]);
            this._gamesUsedCurrently[index] = [];
        }
        return games;
    }
}
exports.GameProvider = GameProvider;
