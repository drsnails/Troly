const initialState = {
    trips: [],
    attractions: [],
    destinations: []
}


export function tripReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TRIPS':
            return {
                ...state,
                trips: action.trips
            }
            
        case 'SET_ATTRACIONS':
            return {
                ...state,
                attractions: action.attractions
            }

        case 'SET_DESTINATIONS':
            return {
                ...state,
                destinations: action.destinations
            }



        default:
            return state
    }
}