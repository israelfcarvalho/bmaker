"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generator = void 0;
const bet_1 = require("../bet");
const game_1 = require("../game");
class Generator {
    constructor(_totalGames) {
        this._totalGames = _totalGames;
        this._bets = [];
        this._games = [];
        this._init();
    }
    _init() {
        this._games = Array.from({ length: this._totalGames }, (_, index) => ({ index: index + 1 }));
    }
    generate(maxRepetitions, betSize) {
        const gamesProvider = new game_1.GameProvider(this._games, maxRepetitions);
        let bet = new bet_1.Bet();
        bet.games = gamesProvider.getGames(betSize);
        while (bet.games.length == betSize) {
            this._bets.push(bet);
            bet = new bet_1.Bet();
            bet.games = gamesProvider.getGames(betSize);
        }
        return this._bets;
    }
}
exports.Generator = Generator;
