import React from 'react'
import { Hero } from '../lib/model'

import './HeroCard.css'

export interface HeroCardParameters {
  hero: Hero
}
export const HeroCard = ({
  hero
}) => {

  // #region Hooks
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-hero-card']

  return (
    <div className={classes.join(' ')}>
      <div>
        {hero.classe} {hero.race} ({hero.cost})
      </div>
      <div>VIE: {hero.vie}</div>
      <div>PHY: {hero.phy}</div>
      <div>MAG: {hero.mag}</div>
      <div>ARM: {hero.arm}</div>
      <div>RES: {hero.res}</div>
      <div>FOR: {hero.str}</div>
      <div>INT: {hero.int}</div>
    </div>
  )
  // #endregion
}
