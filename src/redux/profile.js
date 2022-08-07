import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: null,
    loading: false,
    error: false
}

export const profileSlice = createSlice({
    name: 'profile',
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

export const { selected, failure, loading } = profileSlice.actions;

export default profileSlice.reducer;