import React, { useEffect, useState } from 'react'
import { Category } from '../Category'

import { List, Item, LoaderContainer, Loader } from './styles'

/* Custom Hooks */
function useCategorieData () {
  const [categories, setCategories] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(function () {
    setloading(true)
    window
      .fetch('https://petgram-server-carlosg-luazqpdf7.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setloading(false)
      })
  }, [])
  return { categories, loading }
}
/* Component */
export const ListOfCategories = () => {
  const { categories, loading } = useCategorieData()
  const [showFixed, setshowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setshowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const loader = (key) => (
    <LoaderContainer key={key}>
      <Loader>hola</Loader>
    </LoaderContainer>

  )

  const renderList = fixed => (
    <List fixed={fixed}>
      {loading && [1, 2, 3, 6, 7].map(load => (
        loader(load)
      ))}
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
