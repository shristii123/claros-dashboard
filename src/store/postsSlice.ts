import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostsState {
  data: Post[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  currentPage: number;
  pageSize: number;
}

const initialState: PostsState = {
  data: [],
  loading: false,
  error: null,
  searchTerm: '',
  currentPage: 1,
  pageSize: 5,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.slice(0, 50);
  } catch (err: any) {
    return rejectWithValue(err.message || 'Failed to fetch posts');
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSearchTerm, setCurrentPage, setPageSize } = postsSlice.actions;
export default postsSlice.reducer;
