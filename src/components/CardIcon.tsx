import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import './CardIcon.css'

export interface CardIconParameters {
  className: string
  value: number
  icon: IconProp
}
export const CardIcon = ({
  className,
  value,
  icon
}) => {

  // #region Hooks
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-card-icon']
  if (className) {
    classes.push(className)
  }
  return (
    <div className={classes.join(' ')}>
      <div className='ap-card-icon_layer'>
        <FontAwesomeIcon
          className='ap-card-icon_icon'
          icon={icon}
        />
      </div>
      <div className='ap-card-icon_layer'>
        <span className='ap-card-icon_text'>
          {value}
        </span>
      </div>
    </div>
  )
  // #endregion
}
