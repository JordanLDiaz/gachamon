import { appState } from "../AppState.js";
import { saveState } from "../Utils/Store.js";
import { coinsService } from "./CoinsService.js";

// NOTE service handles all of our business logic...anything that changes on the page should occur here. We do not export the entire class of the service, instead we export only a sinlge instance of the service each time it is requested from the controller
class GachamonsService {
  setActive(gachamonName) {
    let foundGachamon = appState.gachamon.find(g => g.name == gachamonName)
    console.log('[SETTING ACTIVE]', foundGachamon);
    // NOTE now we need a place in our appstate to set this active gachamon and save it... go to appstate and create activeGachamon = null
    // @ts-ignore
    appState.activeGachamon = foundGachamon
  }

  dispense() {
    // console.log('dispensing from service');
    if (appState.coins <= 0) {
      alert('Get some more coins yo!')
    } else {
      coinsService.decreaseCoin()
      let randomIndex = Math.floor(Math.random() * appState.gachamon.length)
      let randomGachamon = appState.gachamon[randomIndex]
      console.log('dispensing', randomGachamon);
      appState.activeGachamon = randomGachamon
      appState.myGachamons.push(randomGachamon)
      appState.emit('myGachamons')
      saveState('myGachamons', appState.myGachamons)
      console.log('my gachamon', appState.myGachamons);
    }
  }
}

export const gachamonsService = new GachamonsService();