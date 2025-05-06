import React from 'react'
import { Hero } from '../lib/model'
import { CardIcon } from './CardIcon'

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
  classes.push(`ap-hero-card--${hero.race.name}`)
  return (
    <div className={classes.join(' ')}>
      <div className='ap-hero-card--name'>
        {hero.classe.name} {hero.race.name}
      </div>

      <div className='ap-hero-card--price'>
        <CardIcon
          className='ap-hero-card--cost'
          icon={['fas', 'coins']}
          value={hero.cost}
        />
      </div>

      <div className='ap-hero-card--attack'>
        <CardIcon
          className=''
          icon={['fas', 'hand-fist']}
          value={hero.phy}
        />
        <CardIcon
          className=''
          icon={['fas', 'wand-sparkles']}
          value={hero.mag}
        />
      </div>

      <div className='ap-hero-card--stats'>
        <CardIcon
          className=''
          icon={['fas', 'dumbbell']}
          value={hero.str}
        />
        <CardIcon
          className=''
          icon={['fas', 'hat-wizard']}
          value={hero.int}
        />
      </div>

      <div className='ap-hero-card--defense'>
        <CardIcon
          className=''
          icon={['fas', 'shield']}
          value={hero.arm}
        />
        <CardIcon
          className=''
          icon={['fas', 'shield-halved']}
          value={hero.res}
        />
        <CardIcon
          className=''
          icon={['fas', 'heart']}
          value={hero.hps}
        />
      </div>
    </div>
  )
  // #endregion
}
