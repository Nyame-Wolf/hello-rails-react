import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {}

export const fetchGreetings = createAsyncThunk(
    'greeting/fetchGreetings',
    async () => {
    const response = await fetch('http://127.0.0.1:3000/greetings/api', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },

    });
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.fulfilled, 
        (state, action) => action.payload
        );
  },
})

export default greetingSlice.reducer;