"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bet = void 0;
class Bet {
    constructor() {
        this._games = [];
    }
    get games() {
        return this._games;
    }
    set games(games) {
        this._games = games.sort((a, b) => a.index - b.index);
    }
    log() {
        const gamesIndex = this._games.map(game => game.index);
        console.log(gamesIndex);
    }
}
exports.Bet = Bet;
