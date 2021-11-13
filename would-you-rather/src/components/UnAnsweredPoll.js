import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";

class UnansweredPoll extends Component{  
   
    state= {
        selectedOption: 'optionOne'
    }

    handleChange = (e)=>
    {
        this.setState(()=>({
            selectedOption: e.target.value
        }))
    }

    handleSubmit = (e)=>
    {
        e.preventDefault()
        
        const { selectedOption } = this.state
        const { id , dispatch} = this.props

        dispatch(handleAnswerQuestion({id, selectedOption}))
    }

    render(){
        const { name, avatarURL } = this.props.userAsked
        const { optionOne, optionTwo } = this.props.question

        return(
            <div className="div-container">
                <h3>{name} askes</h3> 
                <h4>Would You Rather ...</h4>               
                <img className='avatar' alt={`avatar of ${name}`} src={avatarURL}></img>
                    <form className="un-answered-question" onSubmit={this.handleSubmit}>                            
                        <input onChange={this.handleChange} name="options" type="radio" id="optionOne" value="optionOne" />
                        <label htmlFor="optionOne">{optionOne.text}</label><br></br>
                        <input onChange={this.handleChange} name="options" type="radio" id="optionTwo" value="optionTwo"/>
                        <label htmlFor="optionTwo">{optionTwo.text}</label><br></br>
                        <input className="submit" type="submit" value="Submit"/>
                    </form>
            </div>            
        )
    }
}

function mapStateToProps({authedUser, questions, users}, {id}){
    return{
        authedUser,
        userAsked: users[questions[id].author],
        question: questions[id]
    }
}

export default connect(mapStateToProps)(UnansweredPoll)