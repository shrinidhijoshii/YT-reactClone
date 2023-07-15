import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // merging objects - read about Object.assign if you are confused
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

/*
state will look like this
{
keyword:[results......]
}
eg : 
{
    i:["ind vs pak","iphone 13","indian flag"],
    ipho:["iphone 13","iphone 14", ......]
}

*/
