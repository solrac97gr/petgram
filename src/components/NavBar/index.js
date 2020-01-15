import React from 'react'
import { Nav, Link } from './styles'
import router from '../../routes/index'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Link to={router.home}><MdHome size={SIZE} /></Link>
      <Link to={router.favorites}><MdFavoriteBorder size={SIZE} /></Link>
      <Link to={router.profile}><MdPersonOutline size={SIZE} /></Link>
    </Nav>
  )
}
