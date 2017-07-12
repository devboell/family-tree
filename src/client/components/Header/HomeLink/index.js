import React from 'react'
import { Link } from 'react-router-dom'

import homeImage from './images/home.png'
import Image from './Image'
import Wrapper from './Wrapper'

const HomeLink = () =>
  <Wrapper>
    <Link to="/" >
      <Image src={homeImage} alt="Home" />
    </Link>
  </Wrapper>

export default HomeLink
