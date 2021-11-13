import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionsList from "./QuestionsList";

class Dashboard extends Component{

    state ={
        tab: 'Unanswered'
    }

    toggleTab = (e) => {
        e.preventDefault()        
        this.setState(()=>({
            tab: e.target.value
        }))
    }

    render(){
        const AnsweredTab = this.state.tab==='Answered'
        return(
            <div>                
                <div className="tab">
                    <button className={AnsweredTab?"tablinks" : "tablinks active"} value="Unanswered" onClick={this.toggleTab}>Unanswered Questions</button>
                    <button className={AnsweredTab?"tablinks active" : "tablinks" } value="Answered" onClick={this.toggleTab}>Answered Questions</button>                    
                </div>
                
                {AnsweredTab?
                    <QuestionsList questions={this.props.answeredQuestions}/>:
                    <QuestionsList questions={this.props.unansweredQuestions}/>
                }
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions, users }) {
    
    const answeredQuestions = Object.keys(users[authedUser].answers).sort((a, b)=> questions[b].timestamp - questions[a].timestamp)
    return {
      answeredQuestions,
      unansweredQuestions: Object.keys(questions).filter((q) => !answeredQuestions.includes(q)).sort((a, b)=> questions[b].timestamp - questions[a].timestamp)
    }
  }

export default connect(mapStateToProps)(Dashboard)