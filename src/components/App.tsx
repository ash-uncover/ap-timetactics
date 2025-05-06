import React from 'react'
import { RACES } from '../lib/races'
import { CLASSES } from '../lib/classes'
import { HeroCard } from './HeroCard'
import { Hero } from '../lib/model'

import './App.css'

export const App = () => {

  // #region Hooks
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-app']

  return (
    <div className={classes.join(' ')}>
      <table>
        <thead>
          <tr>
            <th></th>
            {Object.values(RACES).map(race => {
              return (
                <th key={race.name}>
                  {race.name}
                </th>

              )
            })}
          </tr>
        </thead>
        <tbody>
          {Object.values(CLASSES).map(classe => {
            return (
              <tr key={classe.name}>
                <td>{classe.name}</td>
                {Object.values(RACES).map(race => {
                  return (
                    <td key={`${classe.name}-${race.name}`}>
                      <HeroCard hero={new Hero(race, classe, 'toto', 3)} />
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
  // #endregion
}
