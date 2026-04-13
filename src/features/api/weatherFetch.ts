import {createAsyncThunk} from "@reduxjs/toolkit";
import type {WeatherInfo} from "../../utils/types";
import {api_key, base_url} from "../../utils/constants.ts";

export const fetchWeather = createAsyncThunk<
    WeatherInfo,
    string,
    { rejectValue: string }
>("weather/fetchWeather",
    async (city, {rejectWithValue}) => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);

            if (!response.ok) {
                return rejectWithValue("Invalid city name");
            }

            const data = await response.json();

            return {
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset
            };
        } catch {
            return rejectWithValue("Failed to fetch weather");
        }
    });