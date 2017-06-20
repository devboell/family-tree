import React from 'react'

import Wrapper from './Wrapper'
import Introduction from './Introduction'
import Image from './Image'
import birdImage from './images/camelia_and_bird.jpg'

const Home = () =>
  <Wrapper>
    <Introduction />
    <Image src={birdImage} />
  </Wrapper>


export default Home
