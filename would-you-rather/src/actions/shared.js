import { hideLoading, showLoading } from "react-redux-loading"
import { getInitialData } from "../utils/_DATA"
import { recieveQuestions } from "./questions"
import { recieveUsers } from "./users"

export function handleInitialData(){
    return (dispatch)=> {
        dispatch(showLoading())
        return getInitialData().then(({users, questions})=> {
            dispatch(recieveUsers(users))
            dispatch(recieveQuestions(questions))            
            dispatch(hideLoading())
        })
    } 
}