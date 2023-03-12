const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      let useSortValue = document.getElementById("sort");
      let sort_value = useSortValue.options[useSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: sort_value,
      };
    case "SORTING_PRODUCTS":
      let newSortData = [];
      let tempSortProduct = [...action.payload];

      if (state.sorting_value === "lowest") {
        let sortingProducts = (a, b) => {
          return a.price - b.price;
        };
        newSortData = tempSortProduct.sort(sortingProducts);
      }
      if (state.sorting_value === "highest") {
        let sortingProducts = (a, b) => {
          return b.price - a.price;
        };
        newSortData = tempSortProduct.sort(sortingProducts);
      }

      if (state.sorting_value === "a-z") {
        newSortData = tempSortProduct.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (state.sorting_value === "z-a") {
        newSortData = tempSortProduct.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products, filter_products } = state;
      let tempFilterProduct = [...all_products];
      const { text, category } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((currentElement) => {
          return currentElement.name.toLowerCase().includes(text);
        });
      }
      if (category) {
        tempFilterProduct = tempFilterProduct.filter((currentElement) => {
          return currentElement.category === category;
        });
      }

      console.log(filter_products);
      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    default:
      return state;
  }
};
export default filterReducer;
