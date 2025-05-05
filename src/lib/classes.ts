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
    name: 'Guerrier',
    hps: 0,
    phy: 0,
    mag: 0,
    arm: 0,
    res: 0,
    str: 0,
    int: 0,
  },
  ARCHER: {
    slot: 'classe',
    name: 'Archer',
    hps: 0,
    phy: 0,
    mag: 0,
    arm: 0,
    res: 0,
    str: 0,
    int: 0,
  },
  MAGE: {
    slot: 'classe',
    name: 'Mage',
    hps: 0,
    phy: 0,
    mag: 0,
    arm: 0,
    res: 0,
    str: 0,
    int: 0,
  },
  PRIEST: {
    slot: 'classe',
    name: 'Pretre',
    hps: 0,
    phy: 0,
    mag: 0,
    arm: 0,
    res: 0,
    str: 0,
    int: 0,
  },
  ROGUE: {
    slot: 'classe',
    name: 'Voleur',
    hps: 0,
    phy: 0,
    mag: 0,
    arm: 0,
    res: 0,
    str: 0,
    int: 0,
  },
  KNIGHT: {
    slot: 'classe',
    name: 'Chevalier',
    hps: 0,
    phy: 0,
    mag: 0,
    arm: 0,
    res: 0,
    str: 0,
    int: 0,
  },
}