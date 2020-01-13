import React from 'react'
import { Router } from '@reach/router'
import routes from './routes/index'
/* Styles */
import { GlobalStyle } from './styles/GlobalStyles'
/* Containers */
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
/* Components */
import { Logo } from './components/Logo'
/* Pages */
import { Home } from './pages/Home'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Home path={routes.home} />
          <Home path={routes.category} />
        </Router>
      )}
      <GlobalStyle />
    </>
  )
}
