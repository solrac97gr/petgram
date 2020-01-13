import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { PhotoLoader } from '../components/PhotoLoader'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProps = ({ loading, error, data = { photo: {} } }) => {
  if (loading) return <PhotoLoader />
  if (error) return <p>Error...</p>

  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProps}
  </Query>
)
