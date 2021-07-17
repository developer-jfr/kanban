import { usersAPI } from "../api/api";

const CREATE_USERS = 'user/USERS/CREATE_USERS';

const TOGLE_IS_AUTHORIZED = 'user/USERS/TOGLE_IS_AUTHORIZED'
const TOGGLE_IS_LOGINED = 'card/CARDS/TOGGLE_IS_LOGINED'
const TOGGLE_SHOW_ALERT = 'card/CARDS/TOGGLE_SHOW_ALERT'
const initialState = {
    users: [],
    isLogined: false,
    isAuthorized: false,
    showAlert: false
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_USERS: {
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        }
      
        case TOGLE_IS_AUTHORIZED: {
            return {
                ...state,
                isAuthorized: action.payload
            }
        }
        case TOGGLE_IS_LOGINED: {
            return {
                ...state,
                isLogined: action.payload
            }
        }
        case TOGGLE_SHOW_ALERT: {
            return {
                ...state,
                showAlert: action.payload
            }
        }
        default: return state
    }
}

const createUsersAC = (user) => ({type: CREATE_USERS, payload: user});

const togleIsAuthorizedAC = (isAuthorized) => ({type: TOGLE_IS_AUTHORIZED, payload: isAuthorized});
const toggleIsLogined = (isLogined) => ({type: TOGGLE_IS_LOGINED, payload: isLogined})



export const createUsersThunk = (username, email, password) => {
    return async (dispatch) => {
        dispatch(togleIsAuthorizedAC(false));
        let response = await usersAPI.signUp(username, email, password);
        dispatch(togleIsAuthorizedAC(true))
        dispatch(createUsersAC(response.data));
    }
}


export const loginUsersThunk = (username, password) => {
    return async (dispatch) => {
      try {
        dispatch(toggleIsLogined(false));
        let response = await usersAPI.login(username, password);
        dispatch(toggleIsLogined(true));
        dispatch(createUsersAC(response.data));
        sessionStorage.setItem('token', response.data.token)
        console.log( response.data.token)
      } catch(error) {
          dispatch({type: TOGGLE_SHOW_ALERT, payload: true})
          setTimeout(() => {
            dispatch({type: TOGGLE_SHOW_ALERT, payload: false})
          }, 3000);
      }
    }
}

export default usersReducer;