import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  name:'',
  type: ''
}

const userSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{}
})

// export {} = authSlice.actions;
export default userSlice.reducer;