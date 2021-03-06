import React from 'react'
import { Button } from '../FavButton/styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Button liked={liked} onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}
