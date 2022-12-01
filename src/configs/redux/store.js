// import { createStore, applyMiddleware } from "redux";
import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import { configureStore } from "@reduxjs/toolkit";
// import HomeProductNewReducer from "./Slice/HomeProductSlice";
// import SearchProductReducer from "./Slice/SearchProductSlice"

const store = createStore(rootReducer, applyMiddleware(thunk, logger)
);

export default store;

// const persistConfig = {
//     key: "auth",
//       // eslint-disable-next-line no-dupe-keys
//     // key: "refreshToken",
//     storage: storage,
//     whitelist: ["auth"],
// };

// const pReducer = persistReducer(persistConfig, rootReducer);
// const middleware = applyMiddleware(thunk, logger);
// const store = createStore(pReducer, middleware);
// const persistor = persistStore(store);
// export { persistor, store };

// export default configureStore({
//     reducer: {
//         HomeProductNew: HomeProductNewReducer,
//         SearchProduct : SearchProductReducer,
//     }
// });

// import React from 'react';

// const initialState = {
//     counter : 0
// }

// const store = (state, action) => {
//     if(action.type ==="INCREMENT"){
//         return{
//             ...state,
//             count: state.count + 1
//         }
//     }else if(action.type ==="DECREMENT"){
//         return{
//             ...state,
//             count: state.count - 1
//         }
//     }
// }