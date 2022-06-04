import React from 'react'
import Mother from './Mother'

const Father = (props) => {
    return (
        <>
          <div>아빠는? {props.count[2]}</div>
          <Mother count={props.count}/>
        </>
      )
    }

export default Father