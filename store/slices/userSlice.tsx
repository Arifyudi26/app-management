import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  user: null;
  name: string;
  email: string;
  image: string | null;
  id: string;
  role: string;
}

interface UserState {
  user: User;
  loading: boolean;
}

const initialState: UserState = {
  user: {} as User,
  loading: true,
};

console.log(initialState);


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState['user']>) => {
      state.user = action.payload;
      state.loading = false; 
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload; 
    },
  },
});

export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
