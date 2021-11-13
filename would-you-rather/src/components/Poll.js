import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnAnsweredPoll";

class Poll extends Component{    
    render(){
        const {id, isExist} = this.props

        if (!isExist) {
            return <Redirect to='/404' />
        }

        return(
            <div>
            {this.props.answeredPoll?
                <AnsweredPoll id={id}/>:
                <UnansweredPoll id={id}/>
            }
            </div>
        )
    }
}

function mapStateToProps ({questions, users, authedUser }, props) {
    const { id } = props.match.params

    return {
        id,
        isExist: questions[id]?true:false,
        answeredPoll: authedUser?Object.keys(users[authedUser].answers).includes(id):false
    }
  }

export default connect(mapStateToProps)(Poll)