import React from 'react'
/* Hooks */
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
/* Styles */
import { ImgWrapper, Img, Article } from './styles'

/* Components */
import { FavButton } from '../FavButton'
/* Containers */
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} alt='imagen' />
            </ImgWrapper>
          </a>
          <ToggleLikeMutation>
            {toggleLike => {
              const handleFavClick = () => {
                !liked && toggleLike({
                  variables: {
                    input: { id }
                  }
                })
                setLiked(!liked)
              }
              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />
              )
            }}
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  )
}
