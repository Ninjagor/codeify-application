import { createSlice } from '@reduxjs/toolkit'

interface BannerCtaState {
    closed: boolean;
}

const initialState = {
    closed: false
} as BannerCtaState;

const bannerCtaSlice = createSlice({
    name: 'bannerCta',
    initialState,
    reducers: {
        close: (state) => {
            state.closed = true;
        },
        reset: () => initialState
    }
})

export const { close, reset } = bannerCtaSlice.actions;
export default bannerCtaSlice.reducer;