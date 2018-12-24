// REACT
import React from 'react';

// ROUTER
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// COMPONENTS
import Header from './components/Header';
import Main from './components/Main';
import Invitation from './components/Invitation';

// ==========

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/invitation" component={Invitation} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);