export const videoListReducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {...state, loading: false, videos: action.payload};
        case 'ERROR':
            return {...state, loading: false, error: 'Something went wrong.Please try again later'}
        default:
            return {...state};
    }
}