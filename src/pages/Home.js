import React from 'react'
/* Components */
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCardsWithQuery'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
