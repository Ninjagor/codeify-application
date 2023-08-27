import { configureStore } from "@reduxjs/toolkit";
import bannerCtaSlice from "./features/bannerCtaSlice";

export const store = configureStore({
  reducer: {
    bannerCtaSlice
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
