import {
   USER_REGISTER_FAIL , 
   USER_REGISTER_SUCCESS , 
   USER_REGISTER_REQUEST ,
   USER_LOGOUT_FAIL , 
   USER_LOGOUT_SUCCESS , 
   USER_LOGOUT_REQUEST ,
   USER_LOGIN_FAIL , 
   USER_LOGIN_SUCCESS , 
   USER_LOGIN_REQUEST ,
   USER_DETAILS_FAIL , 
   USER_DETAILS_SUCCESS , 
   USER_DETAILS_REQUEST ,
   USER_UPDATE_FAIL , 
   USER_UPDATE_SUCCESS , 
   USER_UPDATE_REQUEST
} 
from './../constants/userConstants';

export const authReducer = ( state = { isLoggedIn : false } , action) => {
   switch (action.type) {
      case USER_REGISTER_REQUEST:
      case USER_LOGOUT_REQUEST:
      case USER_LOGIN_REQUEST:
         return {
            loading : true ,
         }
      case USER_REGISTER_SUCCESS: 
      case USER_LOGIN_SUCCESS:
         return {
            loading : false ,
            isLoggedIn : true 
         }
      case USER_LOGOUT_SUCCESS: 
         return {
            loading : false ,
            isLoggedIn : false 
         }
      case USER_REGISTER_FAIL :
      case USER_LOGOUT_FAIL: 
      case USER_LOGIN_FAIL:
         return {
            loading : false ,
            error : action.payload 
         }
      default: return state
   }
}

export const userReducer = ( state = { user : {} } , action) => {
   switch (action.type) {
      case USER_DETAILS_REQUEST:
      case USER_UPDATE_REQUEST:
         return {
            loading : true ,
         }
      case USER_DETAILS_SUCCESS:
      case USER_UPDATE_SUCCESS: 
         return {
            loading : false ,
            user : action.payload  
         }
      case USER_DETAILS_FAIL: 
      case USER_UPDATE_FAIL:
         return {
            loading : false ,
            error : action.payload  
         }
      default: return state
   }
}