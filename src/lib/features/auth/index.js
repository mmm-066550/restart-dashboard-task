import { createSlice } from "@reduxjs/toolkit";
import userMock from "../../../mock/user";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const initialState = {
  isAuthenticated: Cookies.get("token") ? true : false,
  user: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
  token: Cookies.get("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      const { username, password } = action.payload;

      // check if the enterd creds are correct
      if (username === userMock?.username && password === userMock?.password) {
        toast.success("Login Successful ✅");

        state.isAuthenticated = true;
        state.user = userMock;
        state.token = userMock.token;

        Cookies.set("token", userMock?.token, { expires: 7 });
        Cookies.set("user", JSON.stringify(userMock), { expires: 7 });
        window.location.href = "/dashboard";
      } else {
        toast.error("Invalid Email Or Password ❌");
      }
    },
    userLogout: (state) => {
      toast.success("Logout Successful ✅");
      window.location.href = "/login";
      Cookies.remove("token");
      Cookies.remove("user");
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
