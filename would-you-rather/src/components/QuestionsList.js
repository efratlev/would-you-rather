import React, { Component } from "react";
import Question from "./Question";

class QuestionsList extends Component{
    render(){
        return(
            <div>            
                <ul>
                    {
                        this.props.questions.map((id) => (
                            <li key={id}><Question id={id}/></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default QuestionsList