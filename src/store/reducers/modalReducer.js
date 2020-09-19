const initialState = {
    isShown: false,
    props: null,
    cmp:null
}

export function modalReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_MODAL':
            return {
                isShown: true,
                props: action.props,
                cmp:action.cmp
            }
        case 'CLOSE_MODAL':
            return {
                isShown: false,
                props: null,
                cmp:null
            }
        default:
            return state
    }
}