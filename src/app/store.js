import {  legacy_createStore } from '@reduxjs/toolkit';
import  counterRed  from '../features/counter/counterRed';


export const store = legacy_createStore(
  counterRed,
);

export default store;
