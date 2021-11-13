import React, {Component} from "react";
import { connect } from "react-redux";

class User extends Component{
    render(){
        const {name, avatarURL, answers, questions} = this.props.user
        const answersSum = Object.keys(answers).length
        const questionsSum = questions.length

        return(
            <div className="user-container">
                <div>
                    <img className='avatar' alt={`avatar of ${name}`} src={avatarURL}></img>
                </div>
                <div className="user">
                    <span>{name}</span>
                    <span>{`Answered questions: ${answersSum}`}</span>
                    <span>{`Created questions: ${questionsSum}`}</span>
                </div>
                <div>
                    <span>Score</span>
                    <span>{answersSum+questionsSum}</span>
                </div>
                
            </div>
        )
    }
}
function mapStateToProps({users},{id}) {
    return{
        user: users[id]
    }
}
export default connect(mapStateToProps)(User)