import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemonDetail = createAsyncThunk(
  'pokemon/fetchDetail',
  async (name) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return res.data;
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    detail: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemonDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.detail = action.payload;
      })
      .addCase(fetchPokemonDetail.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default pokemonSlice.reducer;