'use strict;'

import React from 'react';

import { HashRouter as Router} from 'react-router-dom'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import {Window,  Menu} from 'butter-base-components';

import {windowActions} from './utils'
import createStore from './store'
import Settings from './settings'

import ButterSettingsContainer from './containers/settings'
import ContentDetailContainer from './containers/details'
import {PlayerMovieContainer, PlayerShowContainer} from './containers/player'
import ListViewContainer from './containers/listview'

import Logo from './components/logo';

require('./style.css')

const {store, providerActions} = createStore(Settings)
const firstTab = Object.keys(Settings.tabs)[0]

const RoutedNinja = () => (
    <Router>
        <Window title={<Logo />} actions={windowActions}>
            <Switch>
                <Route path='/settings' component={ButterSettingsContainer} />
                <Route path='/list/:tab/:provider/:id/s/:sid/e/:eid/play' component={PlayerShowContainer} />
                <Route path='/list/:tab/:provider/:id/s/:sid/play' component={PlayerShowContainer} />
                <Route path='/list/:tab/:provider/:id/play' component={PlayerMovieContainer} />
                <Route path='/list/:tab/:provider/:id' component={ContentDetailContainer} />
                <Route path='/list/:tab' component={ListViewContainer}/>
                <Redirect to={`/list/${firstTab}`}/>
            </Switch>
        </Window>
    </Router>
)

export {RoutedNinja as default, store, providerActions, Settings};