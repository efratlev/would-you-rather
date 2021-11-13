import { ANSWER_QUESTION, CREATE_QUESTION } from "../actions/questions";
import { RECIEVE_USERS } from "../actions/users";

export default function users(state = {}, action){
    switch(action.type){
        case RECIEVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case CREATE_QUESTION:
            return{
                ...state,
                [action.question.author]:{
                    ...state[action.question.author],
                    questions:state[action.question.author].questions.concat(action.question.id) 
                }
            }
        case ANSWER_QUESTION:
            return{
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                    ...state[action.authedUser].answers,
                    [action.id]: action.selectedOption
                    }
                }
            }
        default:
            return state
    }
}