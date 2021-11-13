import React, { Component } from "react";
import { connect } from "react-redux";

class AnsweredPoll extends Component{
    render(){
        const {name, avatarURL} = this.props.userAsked
        const {optionOne, optionTwo} = this.props.question
        const {selectedOption} = this.props
        const sumVotes = optionOne.votes.length + optionTwo.votes.length
        let percentsOptionOne = optionOne.votes.length/sumVotes*100 
        let percentsOptionTwo = optionTwo.votes.length/sumVotes*100 
        percentsOptionOne = Math.floor(percentsOptionOne * 100) / 100 + '%'
        percentsOptionTwo = Math.floor(percentsOptionTwo * 100) / 100 + '%'

        return(
            <div className="result">
                <h3>Asked by {name}</h3>
                <div>
                    <img className='avatar' alt={`avatar of ${name}`} src={avatarURL}></img>
                </div>
                <div>
                    <h4>Results:</h4>
                    <div className="option-result">
                        <span>{optionOne.text}</span>
                        <span>{`${optionOne.votes.length} of ${sumVotes}`}</span>
                        <div className="progress">
                            <div style={{width : percentsOptionOne}} className="bar">{percentsOptionOne}</div>
                        </div>
                        {selectedOption ==='optionOne' && <span className="your-vote">Your Vote</span>}
                    </div>
                    <div className="option-result">
                        <span>{optionTwo.text}</span>
                        <span>{`${optionTwo.votes.length} of ${sumVotes}`}</span>
                        <div className="progress">
                            <div style={{width : percentsOptionTwo}} className="bar">{percentsOptionTwo}</div>
                        </div>
                        {selectedOption ==='optionTwo' && <span className="your-vote">Your Vote</span>}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, {id}){
    return{
        authedUser,
        userAsked: users[questions[id].author],
        question: questions[id],
        selectedOption: users[authedUser].answers[id]
    }
}

export default connect(mapStateToProps)(AnsweredPoll)