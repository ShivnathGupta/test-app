import {createStore} from 'redux'
import SigninReducer from './SigninReducer'
const SigninStore=createStore(SigninReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default SigninStore;