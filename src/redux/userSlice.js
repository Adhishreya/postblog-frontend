import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    error: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadingStart: (state) => {
            state.loading = true
        },
        loginSuccess: (state, action) => {
            state.user = action.payload;
            // state.user.username = action.payload.username;
            // state.user.accessToken = action.payload.accessToken;
            state.loading = false;
            state.error = false
        },
        loginFailure: (state) => {
            state.error = true;
            state.loading = false;
            state.user = null;
        },
        logout: (state) => {
            state.user = null;
            state.loading = false;
            state.error = false
        }
    }
});

export const { loadingStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;