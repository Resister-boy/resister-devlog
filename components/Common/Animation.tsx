import React from 'react'
import Lottie from 'react-lottie-player'

import blockchain from '../../public/assets/blockchain.json'

function Animation() {
  return (
    <Lottie 
      loop
      animationData={blockchain}
      play
      style={{ width: `400px`, height: `400px` }}
    />
  )
}

export default Animation