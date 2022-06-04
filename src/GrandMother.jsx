import React from 'react'
import Father from './Father'

const GrandMother = (props) => {
    return (
        <>
          <div>할머니는? {props.count[1]}</div>
          <Father count={props.count}/>
        </>
      )
    }

export default GrandMother