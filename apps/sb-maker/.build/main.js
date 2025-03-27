"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = require("./generator/generator");
function openSearch() {
    return __awaiter(this, void 0, void 0, function* () {
        const searchTriggerContainer = document.getElementsByTagName('vn-h-search')[0];
        const searchTrigger = searchTriggerContainer === null || searchTriggerContainer === void 0 ? void 0 : searchTriggerContainer.getElementsByTagName('input')[0];
        if (searchTrigger instanceof HTMLElement) {
            searchTrigger.click();
        }
    });
}
function search() {
    return __awaiter(this, arguments, void 0, function* (team = 'liverpool') {
        const searchContainer = document.querySelector('ms-betfinder');
        const searchArea = searchContainer === null || searchContainer === void 0 ? void 0 : searchContainer.querySelector('ms-autocomplete');
        const searchBar = searchArea === null || searchArea === void 0 ? void 0 : searchArea.getElementsByClassName('search-bar')[0];
        const searchForm = searchBar === null || searchBar === void 0 ? void 0 : searchBar.querySelector('form');
        const searchInput = searchBar === null || searchBar === void 0 ? void 0 : searchBar.querySelector('input[type="search"]');
        if (searchInput instanceof HTMLInputElement && searchForm instanceof HTMLFormElement) {
            searchInput.focus();
        }
    });
}
const betsGenerator = new generator_1.Generator(50);
const bets = betsGenerator.generate(4, 12);
console.log('---------------------------------------------------------------------');
console.log(`--------------------${bets.length}-----------------------------------`);
console.log('---------------------------------------------------------------------');
bets.forEach(bet => {
    bet.log();
});
