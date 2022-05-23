import React from 'react';

const ULinterface = (props) => {
  return (
    <ul onClick={props.onClick}>{props.children}</ul>
  )
}

export default ULinterface;