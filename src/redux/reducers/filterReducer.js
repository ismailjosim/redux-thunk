
import { TOGGLE_BRAND, TOGGLE_STOCK } from './../actionTypes/actionTypes';

export const initialState = {
  filters: {
    brands: [],
    stock: false,
  },
  keyword: ""
};


export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BRAND:
      if (!state.filters.brands.includes(action.payload)) { // If brand in not include
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: [...state.filters.brands, action.payload]
          }
        }
      } else {// If brand exist: it will remove the previous brand and add the new one.
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: state.filters.brands.filter(brand => brand !== action.payload)
          }
        }
      }
    case TOGGLE_STOCK:
      return {
        ...state,
        filters: {
          ...state.filters,
          stock: !state.filters.stock
        }
      }
    default:
      return state;
  }
}

