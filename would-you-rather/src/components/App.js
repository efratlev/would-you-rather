import React, { Component } from "react";
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from "react-router";
import LoadingBar from 'react-redux-loading';
import Login from './Login';
import NewQuestion from "./NewQuestion";
import Poll from "./Poll";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import LeaderBoard from "./LeaderBoard";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { isAuthenticated, loading } = this.props
    return (
      <div>
        <LoadingBar />
        <div className='container'>
          <Nav />
          {loading ?
            null :
                <Switch>
                    <PrivateRoute path="/question/:id" component={Poll} isAuthenticated={isAuthenticated}/>
                    <PrivateRoute path="/add" exact component={NewQuestion} isAuthenticated={isAuthenticated}/>
                    <PrivateRoute path="/leaderboard" exact component={LeaderBoard} isAuthenticated={isAuthenticated}/>
                    <PrivateRoute path="/" exact component={Dashboard} isAuthenticated={isAuthenticated}/>
                    <Route path='/login' component={Login} />
                    <Route component={NotFound} />                    
                    <Redirect to="/404" />
                </Switch>}          
        </div>
      </div>
    )
  }
}

function mapStateToProps({ loadingBar, authedUser }) {
  return {
    loading: loadingBar.default === 1,
    isAuthenticated: authedUser !== null
  }
}
export default withRouter(connect(mapStateToProps)(App));
