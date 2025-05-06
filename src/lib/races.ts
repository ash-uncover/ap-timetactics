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
    name: 'human',
    hps: [1, 0, 1],
    phy: [1, 0, 1],
    mag: [0, 0, 1],
    arm: [0, 1, 0],
    res: [0, 0, 0],
    str: [0, 1, 0],
    int: [0, 1, 0],
  },
  ELF: {
    slot: 'race',
    name: 'elf',
    hps: [1, 0, 1],
    phy: [0, 1, 0],
    mag: [1, 0, 1],
    arm: [0, 0, 0],
    res: [1, 0, 0],
    str: [0, 0, 0],
    int: [1, 1, 0],
  },
  ORC: {
    slot: 'race',
    name: 'orc',
    hps: [1, 1, 0],
    phy: [1, 1, 0],
    mag: [0, 0, 0],
    arm: [1, 0, 0],
    res: [0, 0, 1],
    str: [1, 0, 1],
    int: [0, 0, 0],
  },
  DWARF: {
    slot: 'race',
    name: 'dwarf',
    hps: [1, 0, 1],
    phy: [1, 0, 0],
    mag: [0, 0, 0],
    arm: [1, 1, 0],
    res: [1, 0, 1],
    str: [0, 1, 0],
    int: [0, 0, 0],
  },
  GOBELIN: {
    slot: 'race',
    name: 'gobelin',
    hps: [1, 0, 0],
    phy: [1, 0, 1],
    mag: [1, 0, 1],
    arm: [0, 0, 0],
    res: [0, 0, 0],
    str: [0, 0, 0],
    int: [0, 1, 0],
  },
  TROLL: {
    slot: 'race',
    name: 'troll',
    hps: [2, 1, 1],
    phy: [1, 1, 0],
    mag: [0, 0, 0],
    arm: [0, 0, 0],
    res: [0, 0, 0],
    str: [1, 0, 1],
    int: [0, 0, 0],
  }
}