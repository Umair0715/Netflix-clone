import { combineReducers , createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer, userReducer } from './reducers/userReducer';

const reducers = combineReducers({
   auth : authReducer ,
   user : userReducer
})

const initialState = {
   auth : {
      isLoggedIn : localStorage.getItem('isLoggedIn') ? JSON.parse(localStorage.getItem('isLoggedIn')) : false 
   }
}

const store = createStore(reducers , initialState , composeWithDevTools(applyMiddleware(thunk)));

export default store;