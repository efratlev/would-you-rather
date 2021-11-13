import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class Question extends Component{
    render(){
        const { id, question, user } = this.props
        
        if (!question) {
            return <Redirect to='/404' />
        }

        return(
            <Link to={`/question/${id}`} className='question'>
            <img className='avatar' alt={`avatar of ${user.name}`} src={user.avatarURL}></img>
            <div className='question-info'>
                <div>
                    <span>{user.name} askes:</span>
                    <p>Would you rather</p>                 
                    <p>{`... ${question.optionOne.text}...`}</p>                    
                    <button className='view' >
                        View
                    </button>                    
                </div>
            </div>
        </Link>
        )
    }
}

function mapStateToProps ({ questions, users }, {id}) {
    return {
      question: questions[id],
      user: users[questions[id].author]
    }
  }
  export default connect(mapStateToProps)(Question)