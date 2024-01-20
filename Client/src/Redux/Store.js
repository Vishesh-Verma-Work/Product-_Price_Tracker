import { configureStore } from '@reduxjs/toolkit'


import filterReducer from "./feature/filter/filterSlice"
import relatedBlogsReducer from "./feature/relatedBlogs/relatedBlogsSlice"
import BlogReducer from './feature/singleBlog/BlogSlice'
import blogsReducer from './feature/blogs/BlogsSlice'

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: BlogReducer,
    filter:filterReducer ,
    relatedBlogs: relatedBlogsReducer,
  },
})