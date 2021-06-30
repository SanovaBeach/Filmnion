import React from 'react'
import { Route, Switch} from 'react-router-dom'
import './_main.scss'
import {Navbar} from './components'
import Home from './pages/Home'
import Movies from './pages/Movies'
import ViewMore from './pages/ViewMore'
import MovieDetail from './pages/MovieDetail'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:media_type/' component={Movies} />
          <Route exact path='/:media_type/:titleId' component={MovieDetail} />
          <Route exact path='/genre/:genreId' component={ViewMore} />
        </Switch>
    </React.Fragment>
  )
}

export default App