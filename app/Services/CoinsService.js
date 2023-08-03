import { appState } from "../AppState.js";

class CoinsService {
  decreaseCoin() {
    appState.coins--
  }
  addCoin() {
    appState.coins++
    console.log('adding coins', appState.coins);
  }

}

export const coinsService = new CoinsService();