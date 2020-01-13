import React from 'react'
import { Router } from '@reach/router'
import routes from './routes/index'
/* Styles */
import { GlobalStyle } from './styles/GlobalStyles'
/* Components */
import { Logo } from './components/Logo'
/* Pages */
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

export const App = () => {
  return (
    <>
      <Logo />
      <Router>
        <Home path={routes.home} />
        <Home path={routes.category} />
        <Detail path={routes.detail} />
      </Router>
      <GlobalStyle />
    </>
  )
}
