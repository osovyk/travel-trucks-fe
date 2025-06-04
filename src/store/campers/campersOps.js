import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

export const getAllCampersThunk = createAsyncThunk('campers/get-all', async () => {
  const { data } = await axios('campers');
  return data;
});

export const getSingleCamperThunk = createAsyncThunk('campers/get-by-id', async (id) => {
  const { data } = await axios.get(`campers/${id}`);
  return data;
});
