const initialState = {
    username: 'Shiv',
    password: 123,
    isActive: false
}
const SigninReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SignIn':
            return {
                ...state,
                isActive: true
            }
            case 'SignOut' :
            return {
                ...state,
                isActive: false
            }
        default:
            return state
    }
}
export default SigninReducer;