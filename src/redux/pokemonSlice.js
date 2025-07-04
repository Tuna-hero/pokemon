import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonList, getPokemonDetail } from '../utils/api';

export const fetchPokemonList = createAsyncThunk('pokemon/fetchList', async () => {
  const data = await getPokemonList();
  return data.results;
});

export const fetchPokemonDetail = createAsyncThunk('pokemon/fetchDetail', async (name) => {
  const data = await getPokemonDetail(name);
  return data;
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    list: [],
    detail: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPokemonDetail.pending, (state) => {
        state.loading = true;
        state.detail = null;
        state.error = null;
      })
      .addCase(fetchPokemonDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.detail = action.payload;
      })
      .addCase(fetchPokemonDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;