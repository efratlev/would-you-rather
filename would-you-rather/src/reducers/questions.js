import { ANSWER_QUESTION, CREATE_QUESTION, RECIEVE_QUESTIONS } from "../actions/questions";

export default function questions(state={}, action){
    switch(action.type){
        case RECIEVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }
        case CREATE_QUESTION:
            return{                
                ...state,
                [action.question.id]:action.question
            }
        case ANSWER_QUESTION:
            return{
                ...state,
                [action.id]: {
                    ...state[action.id],
                    [action.selectedOption]: {
                    ...state[action.id][action.selectedOption],
                    votes: state[action.id][action.selectedOption].votes.concat([action.authedUser])
                    }
                }
            }
        default:
            return state
    }

}