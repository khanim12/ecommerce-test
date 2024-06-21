import React from 'react'
import List from './slideritems/List'
import SliderComp from './slideritems/SliderComp'

function Slider() {
  return (
        <div className="flex gap-16">
      <List />
        <SliderComp />
    </div>
  )
}

export default Slider
