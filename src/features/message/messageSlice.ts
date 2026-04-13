import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/weatherFetch.ts";

const messageSlice = createSlice({
    name: "message",
    initialState: "Enter city name",
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, () => "Loading...")
            .addCase(fetchWeather.rejected, (_state, action) =>
                action.payload ?? "Something went wrong")
            .addCase(fetchWeather.fulfilled, () => "");
    },
});

export default messageSlice.reducer;