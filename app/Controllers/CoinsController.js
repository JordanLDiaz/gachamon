import { appState } from "../AppState.js";
import { coinsService } from "../Services/CoinsService.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawCoins() {
  console.log('drawing coins');
  let coins = appState.coins
  let template = ''
  for (let i = 0; i < coins; i++) {
    template += '🪙'
  }
  setText('coins', template)
}

export class CoinsController {
  constructor() {
    console.log('hello from coins controller');
    appState.on('coins', _drawCoins)
  }

  addCoin() {
    // console.log('adding coin');
    coinsService.addCoin()
  }
}