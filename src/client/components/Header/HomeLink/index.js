import React from 'react'

import { Link } from 'react-router-dom'
import homeImage from './images/home.png'
import Image from './Image'

const HomeLink = () =>
  <Link to="/" >
    <Image src={homeImage} alt="Home" />
  </Link>

export default HomeLink
