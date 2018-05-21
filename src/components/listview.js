import React from 'react';

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Switch, Route, Redirect } from 'react-router-dom';

import {Navbar} from 'butter-base-components';
import {RouterMenu} from 'butter-component-menu';

import ListContainer from '../containers/list';
import  {defaultToolbar} from '../utils';

const ListView = ({tab, menu, history, location}) => ([
    <Navbar key='main_nav'
            left={
                <RouterMenu items={menu} location={location}/>
            }
            right = {defaultToolbar(history)}
    />,
    <div key={'/list'}>
        <TransitionGroup>
            <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
                <ListContainer tab={tab} history={history}/>
            </CSSTransition>
        </TransitionGroup>
    </div>
])

export {ListView as default}