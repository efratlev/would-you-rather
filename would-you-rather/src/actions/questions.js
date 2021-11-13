import { hideLoading, showLoading } from "react-redux-loading" 
import { saveQuestion, saveQuestionAnswer } from "../utils/_DATA"

export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS"
export const CREATE_QUESTION = "CREATE_QUESTION"
export const ANSWER_QUESTION = "ANSWER_QUESTION"

export function recieveQuestions(questions){
    return{
        type: RECIEVE_QUESTIONS,
        questions,
    }
}

export function createQuestion(question){
    return{
        type: CREATE_QUESTION,
        question,
    }
}

export function answerQuestion(id, selectedOption, authedUser){
    return{
        type: ANSWER_QUESTION,
        id,
        selectedOption,
        authedUser
    }
}

export function handleCreateQuestion({ optionOneText, optionTwoText }){
    return(dispatch, getState) => {
        dispatch(showLoading())
        const { authedUser } = getState()
        return saveQuestion(
            {
                optionOneText, 
                optionTwoText,
                author:authedUser,
            })
            .then((question) => dispatch(createQuestion(question)))
            .then(dispatch(hideLoading()))
    }
}

export function handleAnswerQuestion({ id, selectedOption }){
    return(dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(answerQuestion(id, selectedOption, authedUser))        
        return saveQuestionAnswer(
        {
            authedUser, 
            qid: id,
            answer: selectedOption,
        })
    }
}
