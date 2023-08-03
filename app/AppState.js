import { Gachamon } from "./Models/Gachamon.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])


  /** @type {import('./Models/Gachamon').Gachamon[]} */
  gachamon = [
    new Gachamon({ name: 'Oslo', emoji: '🦧', rarity: '⭐' }),
    new Gachamon({ name: 'Xanther', emoji: '🦈', rarity: '⭐⭐' }),
    new Gachamon({ name: 'Koko', emoji: '🦍', rarity: '⭐' }),
    new Gachamon({ name: 'Franny', emoji: '🦩', rarity: '⭐⭐' }),
    new Gachamon({ name: 'Benny', emoji: '🦦', rarity: '⭐⭐⭐' }),
    new Gachamon({ name: 'Paula', emoji: '🐧', rarity: '⭐⭐' }),
    new Gachamon({ name: 'Lewis', emoji: '🐄', rarity: '⭐' })
  ]

  /** @type {import('./Models/Gachamon').Gachamon|null} */
  activeGachamon = null

  /** @type {import('./Models/Gachamon').Gachamon[]} */
  myGachamons = loadState('myGachamons', [Gachamon])
  // myGachamons = []


  /** @type {number} */
  coins = 0

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
