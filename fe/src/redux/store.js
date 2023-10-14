import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "./state";

export default configureStore(
    {reducer: {
        posts:postsReducer,
    },}
)