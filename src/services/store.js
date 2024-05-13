import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

{/* Store: global state that saves entire info of app */}
{/* We only need to reduce it into a specific part of the app */}
{/* In this case, just the api*/}
{/* https://redux-toolkit.js.org/api/configureStore */}

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});