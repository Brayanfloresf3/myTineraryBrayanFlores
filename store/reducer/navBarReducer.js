import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
    isScrolled: false,
    isMenuOpen: false,
    isModalOpen: false,
};

export const setScrolled = createAction('navbar/setScrolled');
export const toggleMenu = createAction('navbar/toggleMenu');
export const toggleModal = createAction('navbar/toggleModal');

const navbarReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setScrolled, (state, action) => {
            state.isScrolled = action.payload; 
        })
        .addCase(toggleMenu, (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        })
        .addCase(toggleModal, (state) => {
            state.isModalOpen = !state.isModalOpen;
        });
});

export default navbarReducer;
