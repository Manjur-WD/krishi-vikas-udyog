import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    token: "31575|yuo3bhA54txVyABiLOouqD5Qa5cMSrXU9VW9ahPu54782d62",
    user: {},
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setLogInState: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem("token", action.payload);
        },
        setUsers: (state, action) => {
            state.user = action.payload;
        }
    }
})

export const { setToken, setUsers, setLogInState } = authSlice.actions;
export default authSlice.reducer;