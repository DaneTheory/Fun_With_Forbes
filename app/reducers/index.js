import * as ActionTypes from '../constants/'

export default
function FlickrGallery(state = {photos:{}, loading: true}, action){
    switch (action.type) {
        case ActionTypes.SHOW_LOADER:
            return {
                loading: true,
            };
        case ActionTypes.SHOW_PHOTOS:
            return {
                loading: false,
                photos: action.data,
            };
        case ActionTypes.SHOW_MODAL:
            return {
                loading: false,
                photos: state.photos,
                currentPhotoId: action.id
            };
        default:
            return state
    }
}
