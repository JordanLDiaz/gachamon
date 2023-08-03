export class Gachamon {
  constructor(data) {
    this.name = data.name
    this.emoji = data.emoji
    this.rarity = data.rarity
    this.skin = data.skin || ''
  }

  get ListTemplate() {
    return `
    <div onclick="app.gachamonsController.setActive('${this.name}')" class="col-1 selectable">
      <h1 title="${this.name}" class="text-center">${this.emoji}</h1>
    </div>
    `
  }

  get ActiveTemplate() {
    return `
    <div class="col-8">
    <div class="elevation-5 rounded text-center p-3">
      <h1 class="emoji">${this.emoji}</h1>
      <h3>${this.name}</h3>
      <h3>Rarity: ${this.rarity}</h3>
    </div>
  </div>
    `
  }
}