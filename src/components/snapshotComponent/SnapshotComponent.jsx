import React from 'react'
import { NavLink } from 'react-router-dom'

export const SnapshotComponent = () => {

  return (
    <React.Fragment>
        <h1>This is a component we do not want to be modified</h1>
        <span>
            According to the previus statement  we will create a SNAPSHOT TEST to avoid changes
        </span>
        <p>Please look at the code to find it</p><hr />
        <NavLink to = '/'>Home</NavLink>
    </React.Fragment>
  )
}
