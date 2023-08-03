import { CoinsController } from "./Controllers/CoinsController.js";
import { GachamonsController } from "./Controllers/GachamonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  gachamonsController = new GachamonsController();
  coinsController = new CoinsController();
}

window["app"] = new App();

// NOTE our app.js is our window between the index.html and the rest of our javascript(controller, service, etc.)
