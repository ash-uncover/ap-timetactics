import { Classe } from "./classes"
import { Race } from "./races"

export interface Stats {
  hps: [cost1: number, cost2: number, cost3: number]
  phy: [cost1: number, cost2: number, cost3: number]
  mag: [cost1: number, cost2: number, cost3: number]
  arm: [cost1: number, cost2: number, cost3: number]
  res: [cost1: number, cost2: number, cost3: number]
  str: [cost1: number, cost2: number, cost3: number]
  int: [cost1: number, cost2: number, cost3: number]
}
export interface StatLayer extends Stats {
  slot: string
  name: string
}

export class Hero {

  // #region Attributes
  #name: string
  #cost: number
  #race: Race
  #classe: Classe

  #hps = 0
  #phy = 0
  #mag = 0
  #arm = 0
  #res = 0
  #str = 0
  #int = 0
  // #endregion

  // #region Constructor
  constructor(race: Race, classe: Classe, name: string, cost: number) {
    this.#name = name
    this.#cost = cost
    this.#race = race
    this.#classe = classe

    const stats: Stats[] = [race, classe]
    stats.forEach((stat) => {
      for (let i = 0 ; i < cost ; i++) {
        this.#hps += stat.hps[i]
        this.#phy += stat.phy[i]
        this.#mag += stat.mag[i]
        this.#arm += stat.arm[i]
        this.#res += stat.res[i]
        this.#str += stat.str[i]
        this.#int += stat.int[i]
      }
    })

    this.#hps = Math.max(this.#hps, 1)
    this.#phy = Math.max(this.#phy, 0)
    this.#mag = Math.max(this.#mag, 0)
    this.#arm = Math.max(this.#arm, 0)
    this.#res = Math.max(this.#res, 0)
    this.#str = Math.max(this.#str, 0)
    this.#int = Math.max(this.#int, 0)
  }
  // #endregion

  // #region Getters
  get name() { return this.#name }
  get cost() { return this.#cost }
  get race() { return this.#race }
  get classe() { return this.#classe }

  get hps() { return this.#hps }
  get phy() { return this.#phy }
  get mag() { return this.#mag }
  get arm() { return this.#arm }
  get res() { return this.#res }
  get str() { return this.#str }
  get int() { return this.#int }
  // #endregion

  // #region Methods
  // #endregion
}

export const HEROES = []