import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    token: "31372|bdYSZ2QkoH91uh49LlmX2OXd26Kj0y6a9FB3u4C93f0911a9",
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