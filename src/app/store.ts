import {configureStore} from "@reduxjs/toolkit";
import weather from "../features/weather/weatherSlice.ts";
import message from "../features/message/messageSlice.ts";


export const store = configureStore({
    reducer: {
        message, weather
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch