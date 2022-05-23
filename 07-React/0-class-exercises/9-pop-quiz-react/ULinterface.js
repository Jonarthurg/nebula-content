import React from 'react';

export const testFunction = () => {
  return 'testing'
}

const ULinterface = (props) => {
  return (
    <ul>{props.children}</ul>
  )
}

export default ULinterface;