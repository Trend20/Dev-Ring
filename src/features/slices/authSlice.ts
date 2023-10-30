import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  name:'',
  type: ''
}

const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{}
})

// export {} = authSlice.actions;
export default authSlice.reducer;