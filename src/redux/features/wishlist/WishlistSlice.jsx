import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToWishList, getWishList, removeFromWishList } from "../../../services/api";

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getWishList();
      return response.data; // Assuming the API returns an array of wishlisted products
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const toggleWishlist = createAsyncThunk(
  "wishlist/toggleWishlist",
  async ({ productId,categoryId, isWishlisted }, { rejectWithValue }) => {
    try {
      if (isWishlisted) {
        await removeFromWishList(productId,categoryId);
        return { productId, action: "remove" };
      } else {
        await addToWishList(productId,categoryId);
        return { productId, action: "add" };
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: [],
    count: 0,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.products = action.payload;
        state.count = action.payload.length;
        state.status = "succeeded";
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(toggleWishlist.fulfilled, (state, action) => {
        const { productId, action: toggleAction } = action.payload;
        if (toggleAction === "add") {
          state.products.push(productId);
          state.count += 1;
        } else {
          state.products = state.products.filter((id) => id !== productId);
          state.count -= 1;
        }
      });
  },
});

export default WishlistSlice.reducer;