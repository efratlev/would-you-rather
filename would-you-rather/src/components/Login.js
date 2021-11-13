import React from "react";
import { connect } from 'react-redux';
import { Redirect, useLocation } from "react-router";
import { setAuthedUser } from "../actions/authedUser";

function Login(props){

    const [id, setid]  = React.useState(null)

    const [
        redirectToReferrer,
        setRedirectToReferrer
      ] = React.useState(false)
    
    const { state } = useLocation()

    const handleSignIn = (e) => {
        e.preventDefault()
        const {dispatch} = props        
        dispatch(setAuthedUser(id))
        setRedirectToReferrer(true)
    }

    const handleChange = (e) =>
    {
        e.preventDefault()
        setid(e.target.value)
    }

    const { users } = props

    if (redirectToReferrer === true) {
        return <Redirect to={state?.from || '/'} />
      }

        return(
            <div className="div-container">
                <h3>Welcome to the Would You Rather App!</h3>
                <div className="login">
                    <select className="select" name="users" id="users" onChange={handleChange}>
                    <option key="default">Select User</option>               
                        {Object.keys(users).map((user)=> (
                            <option key={user} value={user}>{users[user].name}</option>))
                        }
                    </select>
                </div>
                <button className="btn" disabled={id === null || id ==='Select User'} onClick={handleSignIn}>Sign In</button>
            </div>
        )
    }


function mapStateToProps ({ users }) {
    return {
      users,
    }
  }

export default connect(mapStateToProps)(Login)