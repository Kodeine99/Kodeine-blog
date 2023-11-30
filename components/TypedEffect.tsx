'use client'

import React from 'react'
import Typed from 'typed.js'

interface TypedEffectProps {
  strings: string[]
  typeSpeed: number
}

function TypedEffect({ strings, typeSpeed }: TypedEffectProps) {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: typeSpeed,
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [strings, typeSpeed])

  return (
    <div className="App">
      <span className="text-2xl font-medium text-gray-500 dark:text-gray-400" ref={el} />
    </div>
  )
}
export default TypedEffect
