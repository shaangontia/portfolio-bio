
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface NavState {
    activeSection: string;
}

const initialState: NavState = {
    activeSection: 'about',
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setActiveSection: (state, action: PayloadAction<string>) => {
            state.activeSection = action.payload;
        },
    },
});

export const { setActiveSection } = navSlice.actions;
export default navSlice.reducer;
