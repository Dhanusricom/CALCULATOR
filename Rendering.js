import React from 'react'

const Rendering = (props) => {
  return (props.islogged ? <h1>Welcome {props.username} </h1> : <h1> Can't Login </h1>)

}

export default Rendering;
