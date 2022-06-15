import React, { useReducer } from 'react';
import axios from 'axios';
import globalReducer from "./globalReducer";
import globalContext from './globalContext';

import { ADD_POSTS } from "../types";

const GlobalState = props => {
    const initialState = {
        posts: [],
        page: 1
    }

    const [state, dispatch] = useReducer(globalReducer, initialState)

    // Function to fetch next 5 posts
    const addPosts = async (page) => {
        try {
            const res = await axios(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
            const data = await res.data;
            dispatch({type: ADD_POSTS, payload: {
                data,
                page
            }})
        } catch (err) {
            console.error(err);
        }
    }

    return <globalContext.Provider 
            value={{
                posts: state.posts,
                page: state.page,
                addPosts: addPosts
            }}
    >
        {props.children}
    </globalContext.Provider>
}

export default GlobalState;