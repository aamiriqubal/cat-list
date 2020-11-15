import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Header from './Header';
import Hero from './Hero';
import CatList from './CatList';
import '../assets/styles/app.scss';
/**
 * Babel 7 requires these below imports for async await functions
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

Amplify.configure(awsconfig);

const App = () => {
  const history = useHistory();
  return (
    <div className='cat-app'>
      <Header onClickHome={() => history.push('/')} />
      <AmplifySignOut />
      <Switch>
        <Route
          exact
          path='/'
          component={() => (
            <div className='crud__container'>
              <Hero onClick={() => history.push('/cat-app')} />
            </div>
          )}
        />
        <Route path='/cat-app' component={CatList} />
      </Switch>
    </div>
  );
};

export default withAuthenticator(App);
