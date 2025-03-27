import { Generator } from "./generator/generator";

async function openSearch() {
    const searchTriggerContainer = document.getElementsByTagName('vn-h-search')[0];
    const searchTrigger = searchTriggerContainer?.getElementsByTagName('input')[0];

    if(searchTrigger instanceof HTMLElement) {
            searchTrigger.click();
    }
}

async function search(team = 'liverpool') {
    const searchContainer = document.querySelector('ms-betfinder')
    const searchArea = searchContainer?.querySelector('ms-autocomplete')
    const searchBar = searchArea?.getElementsByClassName('search-bar')[0]
    const searchForm = searchBar?.querySelector('form')
    const searchInput = searchBar?.querySelector('input[type="search"]')

    if(searchInput instanceof HTMLInputElement && searchForm instanceof HTMLFormElement) {
        searchInput.focus()
    }
}

const betsGenerator = new Generator(50)
const bets = betsGenerator.generate(4, 12)

console.log('---------------------------------------------------------------------')
console.log(`--------------------${bets.length}-----------------------------------`)
console.log('---------------------------------------------------------------------')

bets.forEach(bet => {
    bet.log()
})