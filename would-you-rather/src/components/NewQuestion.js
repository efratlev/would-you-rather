import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { handleCreateQuestion } from "../actions/questions";

class NewQuestion extends Component{

    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false
    }

    handleChange = (e) =>
    {
        e.preventDefault()
        this.setState(()=>({
            [e.target.id]: e.target.value
        }))
    }

    handleSubmit = (e) =>
    {
        const {optionOneText, optionTwoText} = this.state
        const {dispatch} = this.props
        e.preventDefault()
        dispatch(handleCreateQuestion({
            optionOneText,
            optionTwoText
        }))

        this.setState(()=>({toHome:true}))
    }

    render(){
        const {optionOneText, optionTwoText, toHome} = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }


        return(
            <div className="div-container">
                <h3 className='center'>Create New Question</h3>
                <form className="new-question" onSubmit={this.handleSubmit}>
                    <span>Would you rather...</span>
                    <input id="optionOneText" type="text" value={optionOneText} placeholder="Enter Option One" text={optionOneText} onChange={this.handleChange}/>
                    <span>Or</span>
                    <input id="optionTwoText" type="text" value={optionTwoText} placeholder="Enter Option Two" text={optionTwoText} onChange={this.handleChange}/>
                    <input className="submit" type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion)