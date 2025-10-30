import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchFavorite = createAsyncThunk(
    'products/fetchFavorite',
    async (params, thunkAPI) => {
        const response = await fetch('http://localhost:5000/favorites')
        const result = await response.json()

        return result
    }
)

export const addToFavorites = createAsyncThunk(
    'products/addToFavorites',
    async (products, { dispatch }) => {
        await fetch(`http://localhost:5000/favorites`, {
            method: "POST",
            body: JSON.stringify(products),
            headers: {
                "Content-Type": "application/json",
            },
        })
        dispatch(fetchFavorite())
    }
)

export const deleteFavorite = createAsyncThunk(
    'products/deleteFavorite',
    async (id, { dispatch }) => {
        await fetch(`http://localhost:5000/favorites/${id}`, {
            method: "DELETE",
        })
        dispatch(fetchFavorite())
    }
)

const initialState = {
    favorites: [],
}

export const favoritesSlice = createSlice({
    name: "favoritesSlice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchFavorite.fulfilled, (state, action) => {
            state.favoritesLoading = false
            state.favorites = action.payload
        })
    },
})

export default favoritesSlice.reducer