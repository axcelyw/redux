import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  INCREMENT,
  DECREMENT,
  RESET
} from './counterSlice';

const counterRed = (state = 0, action) => {
  switch (action.type) {
  case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};
export default counterRed;