import { Classe } from "./classes"
import { Race } from "./races"

export interface Stats {
  hps: number
  phy: number
  mag: number
  arm: number
  res: number
  str: number
  int: number
}
export interface StatLayer extends Stats{
  slot: string
  name: string
}

export class Hero implements Stats {

  // #region Attributes
  #name: string
  #cost: number
  #race: string
  #classe: string

  #hps = 1
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
    this.#race = race.name
    this.#classe = classe.name

    const stats: Stats[] = [race, classe]
    stats.forEach((stat) => {
      this.#hps += stat.hps
      this.#phy += stat.phy
      this.#mag += stat.mag
      this.#arm += stat.arm
      this.#res += stat.res
      this.#str += stat.str
      this.#int += stat.int
    })
  }
  // #endregion

  // #region Getters
  get name () { return this.#name }
  get cost () { return this.#cost }
  get race () { return this.#race }
  get classe () { return this.#classe }

  get hps () { return this.#hps }
  get phy () { return this.#phy }
  get mag () { return this.#mag }
  get arm () { return this.#arm }
  get res () { return this.#res }
  get str () { return this.#str }
  get int () { return this.#int }
  // #endregion

  // #region Methods
  // #endregion
}

export const HEROES = []