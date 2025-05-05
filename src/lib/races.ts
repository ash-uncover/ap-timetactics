import { StatLayer } from './model'

export interface Race extends StatLayer {
  slot: 'race'
}

export type RACE_KEY =
  | 'HUMAN'
  | 'ELF'
  | 'ORC'
  | 'TROLL'
  | 'DWARF'
  | 'GOBELIN'

export const RACE_KEYS: {
  HUMAN: RACE_KEY
  ELF: RACE_KEY
  ORC: RACE_KEY
  TROLL: RACE_KEY
  DWARF: RACE_KEY
  GOBELIN: RACE_KEY
} = {
  HUMAN: 'HUMAN',
  ELF: 'ELF',
  ORC: 'ORC',
  TROLL: 'TROLL',
  DWARF: 'DWARF',
  GOBELIN: 'GOBELIN',
}

export const RACES: Record<RACE_KEY, Race> = {
  HUMAN: {
    slot: 'race',
    name: 'Humain',
    hps: 1,
    phy: 0,
    mag: 0,
    arm: 0,
    res: 0,
    str: 0,
    int: 0,
  },
  ELF: {
    slot: 'race',
    name: 'Elfe',
    hps: 1,
    phy: 0,
    mag: 0,
    arm: 0,
    res: 0,
    str: 0,
    int: 0,
  },
  ORC: {
    slot: 'race',
    name: 'Orc',
    hps: 1,
    phy: 0,
    mag: 0,
    arm: 0,
    res: 0,
    str: 0,
    int: 0,
  },
  DWARF: {
    slot: 'race',
    name: 'Nain',
    hps: 1,
    phy: 0,
    mag: 0,
    arm: 0,
    res: 0,
    str: 0,
    int: 0,
  },
  GOBELIN: {
    slot: 'race',
    name: 'Gobelin',
    hps: 1,
    phy: 0,
    mag: 0,
    arm: 0,
    res: 0,
    str: 0,
    int: 0,
  },
  TROLL: {
    slot: 'race',
    name: 'Troll',
    hps: 1,
    phy: 0,
    mag: 0,
    arm: 0,
    res: 0,
    str: 0,
    int: 0,
  }
}