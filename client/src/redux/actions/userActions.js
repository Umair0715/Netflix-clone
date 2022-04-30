import {
   USER_REGISTER_FAIL , 
   USER_REGISTER_SUCCESS , 
   USER_REGISTER_REQUEST,
   USER_LOGIN_REQUEST,
   USER_LOGOUT_FAIL,
   USER_LOGOUT_SUCCESS,
   USER_LOGOUT_REQUEST,
   USER_LOGIN_SUCCESS,
   USER_LOGIN_FAIL ,
   USER_DETAILS_FAIL , 
   USER_DETAILS_SUCCESS , 
   USER_DETAILS_REQUEST ,
   USER_UPDATE_FAIL , 
   USER_UPDATE_SUCCESS , 
   USER_UPDATE_REQUEST
} 
from './../constants/userConstants';
import axios from 'axios';

// REGISTER USER
export const signup = (data , navigate) => async dispatch => {
   dispatch({ type : USER_REGISTER_REQUEST });
   try{
      await axios.post('/api/user/signup' ,  data);
      dispatch({ type : USER_REGISTER_SUCCESS });
      localStorage.setItem('isLoggedIn' , true );
      localStorage.setItem('newEmail' , null);
      navigate('/subscription/plan-1')
   }catch(err){
      dispatch({ type : USER_REGISTER_FAIL , payload : err.response && err.response.data.message ? err.response.data.message : err.message || 'something went very wrong.' })
   }
} 

// LOGIN USER
export const login = (data , navigate) => async dispatch => {
   dispatch({ type : USER_LOGIN_REQUEST });
   try{
      const { data : { user } } = await axios.post('/api/user/signin' ,  data);
      dispatch({ type : USER_LOGIN_SUCCESS });
      localStorage.setItem('isLoggedIn' , true );
      if(user.isSubscribed){
         navigate('/pk')
      }else{
         navigate('/subscription/plan-1')
      }
   }catch(err){
      dispatch({ type : USER_LOGIN_FAIL , payload : err.response && err.response.data.message ? err.response.data.message : err.message || 'something went very wrong.' })
   }
} 



//LOGOUT USER
export const logout = navigate => async dispatch => {
   dispatch({ type : USER_LOGOUT_REQUEST });
   try{
      await axios.get('/api/user/logout');
      dispatch({ type : USER_LOGOUT_SUCCESS });
      localStorage.setItem('isLoggedIn' , false);
      navigate('/login');
   }catch(err){
      dispatch({ type : USER_LOGOUT_FAIL , payload : err.response && err.response.data.message ? err.response.data.message : err.message || 'something went very wrong.' })
   }
}


// GET USER 
export const getUser = () => async dispatch => {
   dispatch({ type : USER_DETAILS_REQUEST });
   try{
      const { data : { user } } = await axios.get('/api/user');
      dispatch({ type : USER_DETAILS_SUCCESS , payload : user });
   }catch(err){
      dispatch({ type : USER_DETAILS_FAIL , payload : err.response && err.response.data.message ? err.response.data.message : err.message || 'something went very wrong.' })
   }
}

export const updateUser = ( id , data) => async dispatch => {
   dispatch({ type : USER_UPDATE_REQUEST });
   try{
      const { data : { user } } = await axios.put(`/api/user/${id}` , data );
      dispatch({ type : USER_UPDATE_SUCCESS , payload : user });
   }catch(err){
      dispatch({ type : USER_UPDATE_FAIL , payload : err.response && err.response.data.message ? err.response.data.message : err.message || 'something went very wrong.' })
   }
}