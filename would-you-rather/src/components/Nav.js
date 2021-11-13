import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component { 
  
    handleLogOut = (e) => {
      e.preventDefault()
      console.log(this.props)
      const { dispatch } = this.props
      dispatch(setAuthedUser(null))
    }
    render(){
        const {authedUser, user} = this.props
        return (
            <nav className='nav'>
              <ul>
                <li>
                  <NavLink to='/' exact activeClassName='active'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/add' activeClassName='active'>
                    New Question
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/leaderboard' activeClassName='active'>
                    Leader Board
                  </NavLink>
                </li>
                {authedUser && 
                    <li className="logout-li">                        
                        <span>{`Hello, ${user.name} `}</span> 
                        <img className='avatar-login' alt={user.name} src={user.avatarURL}/>                       
                        <button className="logout" onClick={this.handleLogOut}>Logout</button>                     
                    </li>}
              </ul>
            </nav>
        )
    }  
} 

function mapStateToProps ({ authedUser, users }) {
    return {
      authedUser,
      user: users[authedUser]
    }
  }

export default connect(mapStateToProps)(Nav)