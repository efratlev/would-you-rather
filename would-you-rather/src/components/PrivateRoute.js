import { Redirect, Route } from "react-router"

function PrivateRoute({ component: Component, ...rest }) {
    
    return (
      <Route {...rest} render={props => {
        return rest.isAuthenticated
          ? <Component {...props}/>
          : <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />
      }} />
    )
 }

export default PrivateRoute

