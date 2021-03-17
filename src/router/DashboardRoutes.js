import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Navbar } from '../components/ui/Navbar'

import {MarvelScreen} from '../components/marvel/MarvelScreen';
import {DcScreen} from '../components/dc/DcScreen';
import {HeroeScreen} from '../components/heroes/HeroeScreen';

export const DashboardRoutes = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='container mt-4'>
        <Switch>
          <Route exact path='/marvel' component={MarvelScreen}/>
          <Route exact path='/dc' component={DcScreen}/>
          <Route exact path='/heroe/:heroeId' component={HeroeScreen}/>

          <Redirect to='/marvel' />
          
        </Switch>
      </div>
    </Fragment>
  )
}
