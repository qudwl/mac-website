import { configureStore } from '@reduxjs/toolkit'
import reducer from "./Redux/slice"

export default configureStore({
    reducer: {
        slice: reducer
    },
})