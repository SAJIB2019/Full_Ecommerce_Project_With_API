import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducer/FilterReducer";
const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "",
    company: "all",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };
  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };
  //sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    return dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };
  // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "company") {
      value = event.target.value;
    }
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };
  // Sort the products
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products, state.sorting_value, state.filters]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
