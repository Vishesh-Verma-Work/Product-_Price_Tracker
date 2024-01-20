import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getblogs } from "./BlogsApi";
// initial state 

const initialState={
    blogs:[],
    isLoading:false,
    isError:false,
    error:""
}

// async thunks

 export const fetchBlogs= createAsyncThunk("blogs/fetchBlogs",async({tags,search})=>{
    const blogs=await getblogs(tags,search);
    return blogs;
})

const blogsSlice=createSlice({
    name:"blogs",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchBlogs.pending, (state)=>{
            state.isLoading=true,
            state.isError=false,
            state.blogs=[]
        })
        .addCase(fetchBlogs.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.blogs=action.payload
        })
        .addCase(fetchBlogs.rejected,(state,action)=>{
            state.blogs=[],
            state.isLoading=false,
            state.isError=true,
            state.error=action.error?.message
        })
    }
})

export default blogsSlice.reducer;