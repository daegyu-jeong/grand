import React from 'react'
import GrandMother from './GrandMother'

const GrandFather = (props) => {
  return (
    <>
      <div>할아버지는? {props.count[0]}</div>
      <GrandMother count={props.count}/>
    </>
  )
}

export default GrandFather