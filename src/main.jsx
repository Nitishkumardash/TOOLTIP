import React from 'react'
import './index.css'

export default function main(props) {
  const tooltipClass = `tooltiptext-${props.type}`;
  return(
    <>
      <div className='tooltip'> Hover over me!
      <span className={tooltipClass}>Thank's for hovering! I'm a tooltip</span>
      </div>
    </>
  );
}