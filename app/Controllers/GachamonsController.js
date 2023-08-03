// NOTE controller should handle anything the user will interact with...handles inputs from the user. Controller acts like a filter between user and the rest of our app...limits users ability to act maliciously/in a way devs don't want them to
// NOTE anytime i want to manipulate/change the DOM, we start that process in the controller

import { appState } from "../AppState.js"
import { gachamonsService } from "../Services/GachamonsService.js"
import { setHTML } from "../Utils/Writer.js"

// NOTE we put our draw function outside of the class because our user doesn't need to have access to this function. We want it to happen on page load without the user having to do anything with it/interact with it. Making it 'private' essentially hides it from the user
function _drawGachamon() {
  // console.log('drawing gachamon');
  let gachamon = appState.gachamon
  let template = ''
  gachamon.forEach(g => template += g.ListTemplate)
  // NOTE our setHTML does the same thing as our document.getElementById.
  // first arg is id in html, 2nd arg is the template we are putting at that place
  setHTML('gachamons', template)
}

function _drawActive() {
  console.log('drawing active');
  let activeGachamon = appState.activeGachamon
  setHTML('active', activeGachamon?.ActiveTemplate)
}

function _drawMyGachamons() {
  let myGachamons = appState.myGachamons
  let template = ''
  myGachamons.forEach(m => template += m.ListTemplate)
  setHTML('myGachamons', template)
}

export class GachamonsController {
  // NOTE if i want something to happen as soon as page loads (as soon as this controller 'mounts', put it in the constructor...think our draw functions)
  constructor() {
    // NOTE test that controller is hooked up correctly with a console log
    // console.log('Hello from the controller!');
    _drawGachamon()
    appState.on('activeGachamon', _drawActive)
    appState.on('myGachamons', _drawMyGachamons)
    _drawMyGachamons()
  }

  // NOTE "functions" that live inside the constructor is a method, whereas our functions are declared outside of the class. A method does not need to be specified as function. This is mainly a semantical difference, but they act the same

  setActive(gachamonName) {
    // console.log('setting active', gachamonName);
    // NOTE now that we have the name consoling correctly, lets pass that name to our service so it can handle grabbing the entire object using the name we pass it
    gachamonsService.setActive(gachamonName)
  }

  dispense() {
    // console.log('dispensing gachamon');
    gachamonsService.dispense()
  }
}