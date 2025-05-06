import { StatLayer } from './model'

export interface Classe extends StatLayer {
  slot: 'classe'
}

export type CLASSE_KEY =
  | 'WARRIOR'
  | 'ARCHER'
  | 'ROGUE'
  | 'MAGE'
  | 'PRIEST'
  | 'KNIGHT'

export const CLASSE_KEYS: {
  WARRIOR: CLASSE_KEY
  ARCHER: CLASSE_KEY
  ROGUE: CLASSE_KEY
  MAGE: CLASSE_KEY
  PRIEST: CLASSE_KEY
  KNIGHT: CLASSE_KEY
} = {
  WARRIOR: 'WARRIOR',
  ARCHER: 'ARCHER',
  ROGUE: 'ROGUE',
  MAGE: 'MAGE',
  PRIEST: 'PRIEST',
  KNIGHT: 'KNIGHT',
}

export const CLASSES: Record<CLASSE_KEY, Classe> = {
  WARRIOR: {
    slot: 'classe',
    name: 'warrior',
    hps: [0, 0, 0],
    phy: [1, 0, 0],
    mag: [0, 0, 0],
    arm: [0, 0, 1],
    res: [0, 0, 0],
    str: [0, 1, 0],
    int: [0, 0, 0],
  },
  ARCHER: {
    slot: 'classe',
    name: 'archer',
    hps: [0, 0, 0],
    phy: [1, 0, 1],
    mag: [0, 0, 0],
    arm: [0, 0, 0],
    res: [0, 0, 0],
    str: [0, 1, 0],
    int: [0, 0, 0],
  },
  MAGE: {
    slot: 'classe',
    name: 'mage',
    hps: [0, 0, 0],
    phy: [0, 0, 0],
    mag: [1, 0, 0],
    arm: [0, 0, 0],
    res: [0, 0, 0],
    str: [0, 0, 0],
    int: [0, 1, 1],
  },
  PRIEST: {
    slot: 'classe',
    name: 'priest',
    hps: [0, 0, 0],
    phy: [0, 0, 0],
    mag: [0, 0, 0],
    arm: [0, 0, 1],
    res: [0, 1, 0],
    str: [0, 0, 0],
    int: [1, 0, 0],
  },
  ROGUE: {
    slot: 'classe',
    name: 'rogue',
    hps: [0, 0, 0],
    phy: [1, 0, 0],
    mag: [0, 0, 0],
    arm: [0, 0, 0],
    res: [0, 0, 0],
    str: [0, 0, 1],
    int: [0, 1, 0],
  },
  KNIGHT: {
    slot: 'classe',
    name: 'knight',
    hps: [1, 0, 0],
    phy: [0, 0, 0],
    mag: [0, 0, 0],
    arm: [0, 1, 0],
    res: [0, 0, 1],
    str: [0, 0, 0],
    int: [0, 0, 0],
  },
}