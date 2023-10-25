import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || '',
  loading: false,
  fullName: localStorage.getItem('fullName') || '',
  email: localStorage.getItem('email') || '',
  role: localStorage.getItem('Role') || '',
  user_id: localStorage.getItem('user_id') || '',
  darkMode: window.localStorage.getItem('darkMode') || 'light',
  
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setUser_id: (state, action) => {
      state.user_id = action.payload;
    },
    toggleDarkMode: (state) => {
      if (state.darkMode === 'dark') {
        state.darkMode = 'light';
        window.localStorage.setItem('darkMode', 'light');
        document.documentElement.classList.remove('dark');
      } else {
        state.darkMode = 'dark';
        window.localStorage.setItem('darkMode', 'dark');
        document.documentElement.classList.add('dark');
      }
    },
  },
});

export const {
  setToken,
  setLoading,
  setFullName,
  setEmail,
  setRole,
  setUser_id,
  toggleDarkMode,
} = AuthSlice.actions;

export default AuthSlice.reducer;