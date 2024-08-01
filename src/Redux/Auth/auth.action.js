
import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS } from "./auth.actionType"
import { API_BASE_URL } from "../../config/api"

export const loginUserAction =(loginData)=>async(dispatch)=>{

    dispatch({type:LOGIN_REQUEST})
    try {
        const {data} = await axios.post(`${API_BASE_URL}/auth/signin`,loginData.data)

        if(data.jwt){

            localStorage.setItem('jwt', data.jwt)
           

        }
        console.log("------login sucess------",data);
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
    } catch (error) {
        console.log("-----error------");
        dispatch({type:LOGIN_FAILURE,payload:error})
        
    }
}



export const registerUserAction =(loginData)=>async(dispatch)=>{

    dispatch({type:LOGIN_REQUEST})
    try{
        const {data} = await axios.post(`${API_BASE_URL}/auth/signup`,loginData.data)

        if(data.jwt){

            localStorage.setItem('jwt', data.jwt)
           

        }
        console.log("------Register sucess------",data);
        dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
    } catch (error) {
        console.log("-----error------");
        dispatch({type:REGISTER_FAILURE,payload:error})
        
    }
}