import React from 'react'
import { Router } from '@reach/router'
import routes from './routes/index'
import Context from './Context'
/* Styles */
import { GlobalStyle } from './styles/GlobalStyles'
/* Components */
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
/* Pages */
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

export const App = () => {
  return (
    <>
      <Logo />
      <Router>
        <Home path={routes.home} />
        <Home path={routes.category} />
        <Detail path={routes.detail} />
      </Router>
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path={routes.favorites} />
              <User path={routes.profile} />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path={routes.favorites} />
              <NotRegisteredUser path={routes.profile} />
            </Router>
          )}
      </Context.Consumer>
      <NavBar />
      <GlobalStyle />
    </>
  )
}
