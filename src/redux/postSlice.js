import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post: null,
    loading: false,
    error: false
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        selected: (state, action) => {
            state.post = action.payload
        },
        failure: (state) => {
            state.error = true;
            state.loading = false;
            state.post = null;
        },
        loading: (state) => {
            state.error = false;
            state.loading = true;
            state.post = null;
        }
    }
});

export const { selected, failure, loading } = postSlice.actions;

export default postSlice.reducer;