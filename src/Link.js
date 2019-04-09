import React from 'react';

const Link = (props) => {
  return (
    <a href={props.link}>{props.name}</a>
  )
}

export default Link;