import { ADD_POSTS } from '../types';

const globalReducer = (state, action) => {
    switch (action.type) {
        case ADD_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...action.payload.data],
                page: action.payload.page + 1
            };
        default:
            return state;
    }
}

export default globalReducer;