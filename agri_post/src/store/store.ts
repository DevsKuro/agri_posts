import { Middleware, Tuple, configureStore } from "@reduxjs/toolkit";
import postReducer from "./posts/slice";

const syncWithApiMiddleware: Middleware = (api) => (next) => (action) => {
    const { type, payload } = action;

    const response = next(action);
    console.log(type, payload);
    if (type === 'posts/addPost') {
        fetch(`http://localhost:3000/v1/posts/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }
        );
    }
    else if (type === 'posts/deletePostById') {
        const postIdToRemove = payload
        const previousState = store.getState() as RootState
        const postToRemove = previousState.posts.find(post => post.id === postIdToRemove)
        fetch(`http://localhost:3000/v1/posts/${postIdToRemove}`, {
            method: 'DELETE'
        })

    }

    localStorage.setItem("agri_posts_persistent_data", JSON.stringify(api.getState()));

    return response;
};

export const store = configureStore({
    reducer: {
        posts: postReducer,
    },
    middleware: () => new Tuple(syncWithApiMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;